import { Request, Response } from "express";
import { PrismaClient, Specialties } from "@prisma/client";

const prisma = new PrismaClient();

export const specialtiesController = async (req: Request, res: Response) => {
  const getSpecialties: Specialties[] = await prisma.specialties.findMany();
  const mappedSpecialties = getSpecialties.map(
    ({ value, ...rest }: Specialties) => rest
  );

  return res.status(200).json(mappedSpecialties);
};
