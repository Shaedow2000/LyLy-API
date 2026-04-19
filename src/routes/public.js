import express from "express";

import {
  register,
  login,
  deleteAccount,
} from "../controllers/authController.js";

const publicRouter = express.Router();

publicRouter.route("/login").get(login);

publicRouter.route("/register").post(register);

publicRouter.route("/unregister").delete(deleteAccount);

export default publicRouter;
