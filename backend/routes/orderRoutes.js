import express from "express";
const router = express.Router();
import { addOrderItems } from "../controllers/OrderController.js";
import { protectedroute } from "../middleware/authMiddleware.js";

// protected is our middleware which is created by us
router.route("/").post(protectedroute, addOrderItems);

export default router;

//  when we hit this route from action after order creating database in frontend we will be sent to specific page like orders/something