import express from "express";

import {
  register,
  verification,
  resend_code,
  login,
  deleteAccount,
} from "../controllers/authController.js";

const publicRouter = express.Router();

publicRouter.get("/login", login);

publicRouter.post("/register", register);
publicRouter.post("/verify", verification);
publicRouter.post("/reverify", resend_code);

publicRouter.delete("/unregister", deleteAccount);

export default publicRouter;
