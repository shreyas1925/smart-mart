import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protectedroute } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);

router.route("/profile").get(protectedroute, getUserProfile); //adding .route here because we will be dealing with both get an put requests with the user

export default router;
