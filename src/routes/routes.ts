import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to Grey's Anatomy Consultation.",
  });
});

export { routes };
