import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protectedroute, Admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protectedroute, Admin, getUsers);
router.post("/login", authUser);

router
  .route("/profile")
  .get(protectedroute, getUserProfile)
  .put(protectedroute, updateProfile);

//adding .route here because we will be dealing with both get an put requests with the user

router
  .route("/:id")
  .delete(protectedroute, Admin, deleteUser)
  .get(protectedroute, Admin, getUserById)
  .put(protectedroute, Admin, updateUser);
export default router;
