import express from "express";
import multer from "multer";
import { User } from "../models/userModle.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("file");

router.post("/adduser", upload, async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // console.log(req.file);
    const user = new User({
      name,
      email,
      phone,
      image: req.file.filename,
    });
    await user.save();

    req.session.message = {
      type: "success",
      message: "User Created Successfully !",
    };
    res.redirect("/");
  } catch (error) {
    console.log("Error In Image Uploading : ", error);
    res.status(500).json({
      success: false,
      message: "Error In Creating User",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.render("index", { title: "EJS", users: allUsers });
  } catch (error) {
    console.log("Error In Fetching ALl User : ", error);
    res.status(500).json({
      message: "Fetching Users Fail",
    });
  }
});
router.get("/adduser", (req, res) => {
  res.render("add_user", { title: "AddUser" });
});

export default router;
