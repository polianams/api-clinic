import { Router } from "express";
import { checkLoggedMiddleware } from "./../middlewares/authMiddleware";
import { specialtiesController } from "../controllers/specialtiesController";
import { loginAdminController } from "../controllers/loginAdminController";
import {
  createPatientController,
  getPatientController,
} from "../controllers/patientsController";
import { getConsultationController } from "../controllers/appointmentsController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to Grey's Anatomy Consultation.",
  });
});

routes.get("/specialties", specialtiesController);
routes.post("/login/admin", loginAdminController);
routes.get("/specialties/:id", checkLoggedMiddleware, specialtiesController);
routes.get("/patient", checkLoggedMiddleware, getPatientController);
routes.get("/patient/:id", checkLoggedMiddleware, getPatientController);
routes.post("/patient", checkLoggedMiddleware, createPatientController);
routes.get("/consultation", checkLoggedMiddleware, getConsultationController);

export { routes };
