import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders
} from "../controllers/OrderController.js";
import { protectedroute } from "../middleware/authMiddleware.js";

// protected is our middleware which is created by us
router.route("/").post(protectedroute, addOrderItems);
router.route("/orders").get(protectedroute, getMyOrders);

//  when we hit this route from action after order creating database in frontend we will be sent to specific page like orders/something
router.route("/:id").get(protectedroute, getOrderById); //if we are passing /:something better to keep it at bottom
router.route("/:id/pay").put(protectedroute, updateOrderToPaid);
export default router;
