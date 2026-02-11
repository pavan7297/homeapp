import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/index";
import connectDB from "../src/config/db";

let isConnected = false;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Prevent multiple DB connections
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }

  return app(req, res);
}
