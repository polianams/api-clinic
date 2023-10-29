import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const specialtiesController = async function (req, res) {
  const getSpecialties = await prisma.specialties.findMany();
  const mappedSpecialties = getSpecialties.map(({ value, ...rest }) => rest);

  return res.status(200).json(mappedSpecialties);
};

export default specialtiesController;
