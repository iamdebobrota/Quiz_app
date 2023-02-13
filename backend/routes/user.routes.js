const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  verifyToken,
  getUser,
  getAllUser,
} = require("../controllers/user-controller");

router.get("/", (req, res, next) => {
  res.send("Welcome! This is Homepage. You can go /user");
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/allusers", getAllUser);

module.exports = router;
