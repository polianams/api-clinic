import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import { errorsGeneric } from "../utils/errorMessages";

const errorMiddleware = (app: express.Application) => {
  app.use(express.json());

  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return res.status(500).json({
        mensagem: error.message,
      });
    }

    return res.status(500).json({
      mensagem: errorsGeneric.internalServerError,
    });
  });
};

export default errorMiddleware;
