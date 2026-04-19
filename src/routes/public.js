import express from "express";

import { register } from "../controllers/authController.js";

const publicRouter = express.Router();

publicRouter.route("/login").get((req, res, next) => {});

publicRouter.route("/register").post(register);

export default publicRouter;
