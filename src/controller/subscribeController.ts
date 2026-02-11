import { Request, Response } from "express";
import scbscribeModel from "../models/scbscribe.model";
import { STATUS_CODES } from "node:http";

// Create User
export const createSubscribe = async (req: Request, res: Response) => {
  try {
    const subscribedata = new scbscribeModel(req.body);
    await subscribedata.save();

    res.status(201).json({ statuscode: 201, data: subscribedata });
  } catch (err) {
    res.status(500).json({ statuscode: 500, error: err });
  }
};

// Get All Users
export const getSubscribe = async (req: Request, res: Response) => {
  try {
    const subscribedata = await scbscribeModel.find();
    res.json({ statuscode: 200, data: subscribedata });
  } catch (err) {
    res.status(500).json({ statuscode: 500, error: err });
  }
};
