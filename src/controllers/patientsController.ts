import { Request, Response } from "express";
import { PrismaClient, Patients } from "@prisma/client";
import { ConflictError } from "../helpers/errorHelp";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createPatientController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingEmail: Patients | null = await prisma.patients.findUnique({
    where: {
      email: email,
    },
  });

  if (existingEmail) {
    throw new ConflictError("Email is already in use.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.patients.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  res.status(201).json({ message: "Patient has already been registered." });
};
