const express = require("express");
const connection = require("./db");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const quizRouter = require("./routes/quiz.routes")
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/", quizRouter)
app.use("/", userRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch {
    console.log("something went wrong while connecting to db");
  }
  console.log(`Server listening on localhost:${PORT}`);
});
