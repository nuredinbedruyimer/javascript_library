import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Is Required"],
    },
    email: {
      type: String,
      required: [true, "E-mail Is Required"],
    },
    phone: {
      type: String,
      required: [true, "Phone-Number Is Required"],
    },
    image: {
      type: String,
      required: [true, "Image Is Required"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
