import { Request, Response } from "express";
import contactModel from "../models/contact.model";
import { STATUS_CODES } from "node:http";

// Create User
export const createContactInfo = async (req: Request, res: Response) => {
  try {
    const contactdata = new contactModel(req.body);
    await contactdata.save();

    res.status(201).json({ statuscode: 201, data: contactdata });
  } catch (err) {
    console.log(err);
    res.status(500).json({ statuscode: 500, error: err });
  }
};

// Get All Users
export const getContactData = async (req: Request, res: Response) => {
  try {
    const contactdata = await contactModel.find();
    res.json({ statuscode: 200, data: contactdata });
  } catch (err) {
    res.status(500).json({ statuscode: 500, error: err });
  }
};
