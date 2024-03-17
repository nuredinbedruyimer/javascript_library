import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/";
const conectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`Mongo DataBases Connected Successfuly`);
  } catch (error) {}
};

export default conectDB;
