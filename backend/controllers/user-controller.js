const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//user Sign Up
const signup = async (req, res, next) => {
  const { name, email, password, isAdmin } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }
  if (existingUser) {
    return res
      .status(400)
      .send({ message: "Email already exists! Login Instead" });
  }

  //hashing password to store passward on database--->
  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    isAdmin,
  });

  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }

  return res.status(201).json({ message: "Register successfully", user: user });
};

//User LogIn
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return new Error(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: "User not found. SignUp Please" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid Email or password" });
  }

  // when everything is correct like user email & password we will generate token for that user--->
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1hr",
  });

  // adding http cookie to secure our web app
  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30), // 30 sec
    httpOnly: true,
    sameSite: "lax",
  });

  return res
    .status(200)
    .json({ message: "successfully Logged In", user: existingUser, token });
};

const verifyToken = (req, res, next) => {
  // const cookies = req.headers.cookie;
  // const token = cookies.split("=")[1];

  const headers = req.headers[`authorization`];
  const token = headers.split(" ");
  if (!token) {
    res.status(404).json({ message: "No token found" });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (error, user) => {
    if (error) {
      res.status(400).json({ message: "Invalid Token" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

//get user functions

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;

  try {
    user = await User.findById(userId, "-password");
  } catch (error) {
    return new Error(error);
  }

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }
  return res.status(200).json({ user });
};
// get all user function
const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find(
      { isAdmin: "false" },
      { password: false }
    ).exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.getAllUser = getAllUser;
