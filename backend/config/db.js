const mongoose = require("mongoose");
const uri =
  "mongodb+srv://SiddharthJ3:Qwerty%4012345@astral.c3ehx1q.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
