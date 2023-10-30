import { NextFunction, Request, Response } from "express";
import { errorsGeneric } from "../utils/errorMessages";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  return res.status(500).json({ message: errorsGeneric.internalServerError });
};
