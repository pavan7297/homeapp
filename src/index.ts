import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import subscribeRouter from "./routes/subscribeRouter";
import contactRouter from "./routes/contactRouter";
import { corsMiddleware } from "./middleware/cors.middleware";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(corsMiddleware);

// Routes
app.use("/api/subscribe", subscribeRouter);
app.use("/api/contact", contactRouter);

// ⚠️ IMPORTANT
// ❌ Remove app.listen()
// ✅ Export app instead
export default app;
