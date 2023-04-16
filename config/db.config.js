const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.DBURL;

const dbConnection = async () => {
  await mongoose.connect(dbUrl);
  console.log("Database Connection is Established...");
};

module.exports = dbConnection;
