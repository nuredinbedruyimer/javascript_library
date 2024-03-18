import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(
      `Database Connected Successfully With Host : ${conn.connection.host}`
    );
  } catch (error) {
    console.log("Databases Error : ", error);
  }
};

export default connectDB;
