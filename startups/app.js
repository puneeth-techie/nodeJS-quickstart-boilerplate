import express from "express";
import { notFound, errorHandler } from "../middlewares/errorHandler.js";

// init app
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route handler

// error handler
app.use(notFound);
app.use(errorHandler);

export default app;
