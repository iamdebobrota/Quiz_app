const mongoose = require("mongoose");
require("dotenv").config();
const mongoose_url = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);
const connection = mongoose.connect(mongoose_url);

module.exports = connection;
