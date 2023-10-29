import "express-async-errors";
import express, { NextFunction } from "express";
import { errorsGeneric } from "../utils/errorMessages";

const errorMiddleware = (app: express.Application) => {
  app.use(express.json());

  app.use((err: Error, req, res, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({
        mensagem: err.message,
      });
    }

    return res.status(500).json({
      mensagem: errorsGeneric.internalServerError,
    });
  });
};

export default errorMiddleware;
