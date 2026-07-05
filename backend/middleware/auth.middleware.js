import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import logger from "../lib/logger.js";


export const protectRoute = async (req, res, next)=>{
    try {
        const accessToken = req.cookies.accessToken;
        if(!accessToken){
            return res.status(401).json({message:"Unauthorized - No access token provided"});
        }
        try {
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findById(decoded.userId).select("-password");
            if(!user){
                return res.status(401).json({message:"User not found"});
            }
            req.user = user;
            next();
        } catch (error) {
            if (error.name === "TokenExpiredError"){
                return res.status(401).json({message:"Token expired"});
            }
            throw error;
        }
    } catch (error) {
        logger.error({ err: error }, "error in protectRoute");
        return res.status(500).json({message: "Something went wrong. Please try again."});
    }
}


export const adminRoute = (req, res, next)=>{
    if(req.user && ["admin", "master"].includes(req.user.role)){
        next();
    }else{
        return res.status(403).json({message: "Access denied - Admins only"});
    }
}

export const masterRoute = (req, res, next) => {
    if (req.user && req.user.role === "master") {
        next();
    } else {
        return res.status(403).json({ message: "Access denied - Master only" });
    }
}

