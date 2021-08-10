import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protectedroute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password"); //returning here is the password
      //rest of the users data in req.user
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not authorized , token failed");
    }
    // console.log("token found");
  }

  if (!token) {
    res.status(401);
    throw new Error("User not authorized, no token found");
  }
});

export { protectedroute };
