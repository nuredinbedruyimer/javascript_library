import { Response, Request, NextFunction } from "express";

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  const statusCode = error.status || 500;
  const errorMessage = error.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message: errorMessage + "Realy",
  });
};
