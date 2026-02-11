import { Router } from "express";
import { createContactInfo, getContactData } from "../controller/contactController"
const router = Router();

router.post("/create-info", createContactInfo);
router.get("/all", getContactData);

export default router;