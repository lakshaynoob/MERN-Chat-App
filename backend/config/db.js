const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB conected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error.message.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
