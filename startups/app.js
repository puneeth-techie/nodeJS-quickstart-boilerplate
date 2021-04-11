import express from "express";
import { notFound, errorHandler } from "../middlewares/errorHandler.js";
import homeRoute from "../routes/quickStarterRoute.js";

// init app
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// view engine
app.set("view engine", "ejs");

// route handler
app.use("/", homeRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

export default app;
