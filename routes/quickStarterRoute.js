import express from "express";
import { home } from "../controllers/quickStarterController.js";

// init router
const router = express.Router();

// GET      Fetching home content
// access   @public
router.route("/").get(home);

export default router;
