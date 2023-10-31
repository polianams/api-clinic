import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { PrismaClient, Admin } from "@prisma/client";

import { passwordJwt } from "../config/authConfig";
import { BadRequestError, UnauthorizedError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

export const loginAdminController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Username and password are required.");
  }

  const admin: Admin | null = await prisma.admin.findFirst({
    where: {
      username,
      password,
    },
  });

  if (!admin || username !== admin.username || password !== admin.password) {
    throw new UnauthorizedError("Authentication failed: invalid credentials");
  }

  const token: string = jwt.sign({ username }, passwordJwt, {
    expiresIn: "6h",
  });

  return res.status(200).json({
    message: "Login successful",
    token,
  });
};
