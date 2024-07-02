const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/contactlist-db")
      .then(() => console.log("db connected successfully"))
      .catch((err) => console.log("error db connection"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
