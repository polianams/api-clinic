import { Request, Response } from "express";
import { PrismaClient, Specialties } from "@prisma/client";
import { BadRequestError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

export const specialtiesController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {
    const getSpecialty = await prisma.specialties.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!getSpecialty) {
      throw new BadRequestError("Specialty not found");
    }
    return res.status(200).json(getSpecialty);
  }

  const getSpecialties: Specialties[] = await prisma.specialties.findMany();

  const mappedSpecialties = getSpecialties.map(
    ({ value, ...rest }: Specialties) => rest
  );
  return res.status(200).json(mappedSpecialties);
};
