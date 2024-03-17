import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

interface UserType extends Document {
  name: string;
  email: string;
  password: string;
  hobbies: Array<{
    name: string;
  }>;

  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema: Schema<UserType> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    email: {
      type: String,
      required: [true, "E-mail is Required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    hobbies: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (this: UserType, next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    next(error as any);
  }
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

const User: Model<UserType> = mongoose.model<UserType>("User", userSchema);

export default User;
