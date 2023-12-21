const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", true);  // to suppress warning in the console
  return mongoose.connect(url);
};

module.exports = connectDB;
