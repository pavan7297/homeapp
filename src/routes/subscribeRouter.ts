import { Router } from "express";
import { createSubscribe, getSubscribe } from "../controller/subscribeController"
const router = Router();

router.post("/create", createSubscribe);
router.get("/", getSubscribe);

export default router;