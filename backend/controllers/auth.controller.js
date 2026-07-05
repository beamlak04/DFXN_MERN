import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { recordAuditEvent } from "../lib/auditLogger.js";
import logger from "../lib/logger.js";
import { getLoginFailureKey, getLoginLockKey, normalizeEmail } from "../middleware/rateLimit.middleware.js";
import { generateCsrfToken } from "../middleware/csrf.middleware.js";

const LOGIN_FAILURE_LIMIT = 5;
const LOGIN_LOCK_SECONDS = 5 * 60;

const generateTokens = (userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});

    const refreshToken = jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"})

    return {accessToken, refreshToken}  
}

const storeRefreshToken = async(userId, refreshToken) =>{
    await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 7*24*60*60)
}

const setCookies = (res, refreshToken, accessToken, csrfToken) => {
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        // Secure flag required for SameSite=None; localhost is treated as a secure context in modern browsers
        secure: true,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        maxAge: 7*24*60*60*1000
    })
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        maxAge: 15 * 60 * 1000
    })
    // csrfToken cookie intentionally NOT httpOnly so frontend JS can read it for the
    // double-submit CSRF protection. Keep sameSite consistent with accessToken.
    if (csrfToken) {
      res.cookie("csrfToken", csrfToken, {
        httpOnly: false,
        secure: true,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        maxAge: 15 * 60 * 1000,
      });
    }
}
export const signup = async (req,res) => {
    return res.status(403).json({
        message: "Public signup is disabled. Ask a master user to create admin access.",
    });
}

export const login = async (req,res) => {
    try {
        const email = normalizeEmail(req.body?.email);
        const password = String(req.body?.password || "");

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const lockKey = getLoginLockKey(email);
        const lockedUntil = await redis.get(lockKey);
        if (lockedUntil) {
            return res.status(429).json({
                message: "Too many failed login attempts. Please try again later.",
            });
        }

        const user = await User.findOne({email});
        
        if (user && (await user.comparePassword(password))){
            await redis.del(getLoginFailureKey(email));
            await redis.del(lockKey);
            const {accessToken, refreshToken} = generateTokens(user._id);
            await storeRefreshToken(user._id, refreshToken);
            const csrfToken = generateCsrfToken();
            setCookies(res, refreshToken, accessToken, csrfToken);
            await recordAuditEvent({
                user,
                req,
                action: "auth.login",
                resource: "auth/login",
                metadata: {
                    email: user.email,
                },
            });
            res.status(200).json({user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }, message: "Login successful"});
        }else{
            const failureKey = getLoginFailureKey(email);
            const failedAttempts = await redis.incr(failureKey);
            if (failedAttempts === 1) {
                await redis.expire(failureKey, LOGIN_LOCK_SECONDS);
            }

            if (failedAttempts >= LOGIN_FAILURE_LIMIT) {
                await redis.set(lockKey, "1", "EX", LOGIN_LOCK_SECONDS);
                await redis.del(failureKey);
            }

            res.status(401).json({message: "Invalid credentials"});
        }
    } catch (error) {
        logger.error({ err: error }, "error in login");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}

export const logout = async (req,res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        let user = null;
        if(refreshToken){
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${decoded.userId}`);
            user = await User.findById(decoded.userId).select("name email role").lean();
        }

        if (user) {
            await recordAuditEvent({
                user,
                req,
                action: "auth.logout",
                resource: "auth/logout",
            });
        }
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        };
        res.clearCookie("accessToken", cookieOptions);
        res.clearCookie("refreshToken", cookieOptions);
        res.json({message:"Logout successful"});
    } catch (error) {
        logger.error({ err: error }, "error in logout");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}


export const refreshAccessToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken){
            return res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

        if (storedToken !== refreshToken){
            return res.status(401).json({message: "Invalid refresh token"})
        }
        const accessToken = jwt.sign({userId: decoded.userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
        const csrfToken = generateCsrfToken();
        res.cookie("accessToken", accessToken,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
            maxAge: 15 * 60 * 1000
        })
        // update csrf token alongside refreshed access token
        res.cookie("csrfToken", csrfToken, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
            maxAge: 15 * 60 * 1000,
        })
        res.json({message: "Token refreshed successfully"})
    } catch (error) {
        if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Invalid or expired refresh token" });
        }
        logger.error({ err: error }, "error in refreshAccessToken");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}

export const getProfile = async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.log("error in profile route")
        logger.error({ err: error }, "error in getProfile");
        res.status(500).json({message: "Something went wrong. Please try again."})
    }
}

