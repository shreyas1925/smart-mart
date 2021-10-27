import express from "express";
const router = express.Router();
import { addOrderItems } from "../controllers/OrderController.js";
import { protectedroute } from "../middleware/authMiddleware.js";

router.route("/").post(protectedroute, addOrderItems);

export default router;
