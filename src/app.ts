import express, { NextFunction, Response, Request } from "express";
import errorMiddleware from "./middlewares/errorMiddleware";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());

errorMiddleware(app);
app.use(routes);

export { app };
