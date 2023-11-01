import { Request, Response } from "express";
import { PrismaClient, Consultations } from "@prisma/client";

const prisma = new PrismaClient();

export const getConsultationController = async (
  req: Request,
  res: Response
) => {
  const getConsultation: Consultations[] =
    await prisma.consultations.findMany();

  return res.status(200).json(getConsultation);
};
