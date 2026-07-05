import express from "express"
import dotenv from "dotenv"
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js"
import adminRoutes from "./routes/admin.route.js"
import orderRoutes from "./routes/order.route.js"
import contactRoutes from "./routes/contact.route.js"
import { connectDB } from "./lib/db.js";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware.js";
import logger from "./lib/logger.js";

dotenv.config({ path: process.cwd() + '/.env' });



const app = express();
app.set("trust proxy", 1);

// security middleware
app.use(helmet());


const PORT = process.env.PORT;
const allowedOrigins = process.env.CLIENT_URLS
    ? process.env.CLIENT_URLS.split(",").map((origin) => origin.trim()).filter(Boolean)
    : ["http://localhost:5173", "http://192.168.1.11:5173"];

console.log("Allowed CORS origins:", allowedOrigins);

app.use(express.json({
    limit:"5mb",
    verify: (req, _res, buf) => {
        req.rawBody = buf.toString("utf8");
    },
}));
const mongoSanitizeOptions = { replaceWith: "_" };
app.use((req, _res, next) => {
    if (req.body) mongoSanitize.sanitize(req.body, mongoSanitizeOptions);
    if (req.params) mongoSanitize.sanitize(req.params, mongoSanitizeOptions);
    if (req.query) mongoSanitize.sanitize(req.query, mongoSanitizeOptions);
    return next();
});
app.use(cors({
    origin: (origin, callback) => {
        // allow non-browser requests like curl (no origin)
        if (!origin) return callback(null, true);
        // allow explicit configured origins
        if (allowedOrigins.includes(origin)) return callback(null, true);
        // allow localhost on any port
        if (/^https?:\/\/localhost(:\d+)?$/.test(origin)) return callback(null, true);
        // allow local network hosts (e.g., 192.168.x.x) on any port
        if (/^https?:\/\/192\.168\.\d+\.\d+(:\d+)?$/.test(origin)) return callback(null, true);
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
}))
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("server is running on http://localhost:" + PORT);
        });
    } catch (error) {
        logger.error({ err: error }, "failed to start server");
        process.exit(1);
    }
};

startServer();



