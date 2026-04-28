import express from "express";

import {
  register,
  verification,
  resend_code,
  login,
  deleteAccount,
  reset_password,
} from "../controllers/authController.js";

const publicRouter = express.Router();

publicRouter.get("/login", login);

publicRouter.post("/register", register);
publicRouter.post("/verify", verification);
publicRouter.post("/reverify", resend_code);
publicRouter.post("/password_reset", reset_password);

publicRouter.delete("/unregister", deleteAccount);

export default publicRouter;
