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

export { authUser, getUserProfile };
