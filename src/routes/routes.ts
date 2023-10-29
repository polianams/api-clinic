import { Router } from "express";
import specialtiesController from "../controllers/specialtiesController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to Grey's Anatomy Consultation.",
  });
});

routes.get("/specialties", specialtiesController);

export { routes };
