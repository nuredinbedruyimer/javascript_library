import express from "express";
import { registerUserController } from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUserController);

export default router;
