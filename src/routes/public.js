import express from "express";

import { register, login } from "../controllers/authController.js";

const publicRouter = express.Router();

publicRouter.route("/login").get(login);

publicRouter.route("/register").post(register);

export default publicRouter;
