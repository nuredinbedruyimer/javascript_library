import { NextFunction, Response, Request } from "express";

export const registerUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, hobbies } = req.body;
    console.log(name);
    res.status(200).json({
      message: "I am Working",
    });
  } catch (error) {
    next(error);
  }
};
