import { checkLoggedMiddleware } from "./../middlewares/authMiddleware";
import { Router } from "express";
import { specialtiesController } from "../controllers/specialtiesController";
import { loginAdminController } from "../controllers/loginAdminController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to Grey's Anatomy Consultation.",
  });
});

routes.get("/specialties", specialtiesController);
routes.post("/login/admin", loginAdminController);
routes.get("/specialties/:id", checkLoggedMiddleware, specialtiesController);

export { routes };
