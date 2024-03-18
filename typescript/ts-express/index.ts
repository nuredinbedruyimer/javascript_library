import express, { NextFunction, Request, Response } from "express";
import CustomeError from "./utils/error";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import conectDB from "./databases/databases";
import { registerUserController } from "./controllers/userController";

const app = express();

let port = process.env.PORT || 5000;

app.post("/api/v1/register", registerUserController);

app.get("/fetch", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new CustomeError("Message from 'Fetch' end point", 500);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
  conectDB();
});
