import { Router } from "express";
import { checkLoggedMiddleware } from "./../middlewares/authMiddleware";
import { specialtiesController } from "../controllers/specialtiesController";
import { loginAdminController } from "../controllers/loginAdminController";
import { createPatientController } from "../controllers/patientsController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to Grey's Anatomy Consultation.",
  });
});

routes.get("/specialties", specialtiesController);
routes.post("/login/admin", loginAdminController);
routes.get("/specialties/:id", checkLoggedMiddleware, specialtiesController);
routes.post("/patient", checkLoggedMiddleware, createPatientController);

export { routes };
