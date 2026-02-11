import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import subscribeRouter from "./routes/subscribeRouter";
import contactRouter from "./routes/contactRouter";
import { corsMiddleware } from "./middleware/cors.middleware";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(express.json());
app.use(corsMiddleware);

// Routes
app.use("/api/subscribe", subscribeRouter);
app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
