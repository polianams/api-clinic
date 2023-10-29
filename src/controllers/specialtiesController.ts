import { PrismaClient } from "@prisma/client";
import { errorsGeneric } from "../utils/errorMessages";

const prisma = new PrismaClient();

const specialtiesController = async function (req, res) {
  try {
    const getSpecialties = await prisma.specialties.findMany();
    const mappedSpecialties = getSpecialties.map(({ value, ...rest }) => rest);

    return res.status(200).json(mappedSpecialties);
  } catch (error) {
    return res.status(500).json({
      message: errorsGeneric.internalServerError,
    });
  }
};

export default specialtiesController;
