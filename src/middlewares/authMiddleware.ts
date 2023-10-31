import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { passwordJwt } from "../config/authConfig";
import { BadRequestError, UnauthorizedError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

declare global {
  namespace Express {
    interface Request {
      admin?: any;
    }
  }
}

export const checkLoggedMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthorizedError("Unauthorized");
  }

  const token = authorization as string;

  const { username } = jwt.verify(token, passwordJwt) as { username: string };

  const admin = await prisma.admin.findFirst({
    where: {
      username,
    },
  });

  if (!admin) {
    throw new BadRequestError("Unauthorized");
  }

  req.admin = admin;
  next();
};
