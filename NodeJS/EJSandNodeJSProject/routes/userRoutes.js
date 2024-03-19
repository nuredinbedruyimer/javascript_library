import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "EJS" });
});
router.get("/adduser", (req, res) => {
  res.render("add_user", { title: "AddUser" });
});

export default router;
