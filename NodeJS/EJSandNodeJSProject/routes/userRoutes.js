import express from "express";
import multer from "multer";
import { User } from "../models/userModle.js";
import fs from "fs";

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

router.get("/edit/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    console.log("User : ", userID);
    const existingUser = await User.findOne({ _id: userID });
    console.log("User : ", existingUser);
    if (!existingUser) {
      res.redirect("/");
    }
    res.render("update_user", {
      title: "Update User",
      user: existingUser,
    });
  } catch (error) {
    console.log("Error In Edit ROute");
    res.redirect("/");
  }
});

router.post("/edit/:id", upload, async (req, res) => {
  try {
    const userID = req.params.id;
    const { name, email, phone, old_image } = req.body;
    console.log("Old Image : ", old_image);
    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlinkSync(`uploads/${req.body.old_image}`);
      } catch (error) {
        console.log("Error In file Deletion : ", error);
        res.status(500).json({
          message: "File Deletion Error",
        });
        return;
      }
    } else {
      new_image = req.body.old_image;
    }
    const updatedUser = await User.findOneAndUpdate(
      { _id: userID },
      {
        name,
        email,
        phone,
        image: new_image,
      }
    );
    console.log("Updated User : ", updatedUser);
    req.session.message = {
      type: "success",
      message: "User Updated Successfully",
    };
    res.redirect("/");
  } catch (error) {
    console.log("Error In User Update : ", error);
    res.status(500).json({
      message: "User Updation Failure",
    });
  }
});

export default router;
