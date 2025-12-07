import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import adminRoutes from "./routes/admin.route.js"
import orderRoutes from "./routes/order.route.js"
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json({limit:"5mb"}));
app.use(cors({
    origin:["http://localhost:5173","http://192.168.1.11:5173"],
    credentials: true,
}))
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);

app.listen(PORT, ()=>{
    console.log("server is running on http://localhost:" + PORT);
    connectDB();
})



