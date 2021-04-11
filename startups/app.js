import express from "express";
import { notFound, errorHandler } from "../middlewares/errorHandler.js";
import homeRoute from "../routes/quickStarterRoute.js";
import morgan from "morgan";

// init app
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// Development middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// view engine
app.set("view engine", "ejs");

// route handler
app.use("/", homeRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

export default app;
