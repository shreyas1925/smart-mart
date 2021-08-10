import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generatewebToken from "../utils/generatewebToken.js";
// @desc Auth the user and gets a token for specific user just logging in
// @route GET /api/users/login
// @access public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatewebToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Credentials are not matching");
  }
});

// @desc Register the new user
// @route GET /api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.send(400);
    throw new Error("User already registered!!");
  }

  const user = await User.create({ name, email, password }); //here we have create method which is the synthetic sugar for creating .save which we have done in model with the help of user Schema

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatewebToken(user._id),
    });
  } else {
    res.send(400);
    throw new Error("Invalid user data");
  }
});

// @desc get the user profile
// @route GET /api/users/profile
// @access private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Credentials are not matching");
  }

  res.send("success");
});

export { authUser, getUserProfile, registerUser };
