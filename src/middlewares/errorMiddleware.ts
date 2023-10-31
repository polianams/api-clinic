import { NextFunction, Request, Response } from "express";
import { errorsGeneric } from "../utils/errorMessages";
import { ApiError } from "../helpers/errorHelp";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode
    ? error.message
    : errorsGeneric.internalServerError;
  return res.status(statusCode).json({ message });
};
