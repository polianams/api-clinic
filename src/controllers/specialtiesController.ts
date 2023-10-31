import { Request, Response } from "express";
import { PrismaClient, Specialties } from "@prisma/client";
import { BadRequestError } from "../helpers/errorHelp";

const prisma = new PrismaClient();

interface SpecialtyWithDoctors {
  id: number;
  specialty: string;
  value: number;
  doctors?: any[];
}

export const specialtiesController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {
    const getSpecialty: SpecialtyWithDoctors =
      await prisma.specialties.findUnique({
        where: {
          id: Number(id),
        },
      });

    if (!getSpecialty) {
      throw new BadRequestError("Specialty not found");
    }

    const doctors = await prisma.doctors.findMany({
      where: {
        specialtyId: Number(id),
      },
    });

    if (doctors.length > 0) {
      getSpecialty.doctors = doctors.map(({ specialtyId, ...rest }) => rest);
    }

    return res.status(200).json(getSpecialty);
  }

  const getSpecialties: Specialties[] = await prisma.specialties.findMany();

  const mappedSpecialties = getSpecialties.map(
    ({ value, ...rest }: Specialties) => rest
  );
  return res.status(200).json(mappedSpecialties);
};
