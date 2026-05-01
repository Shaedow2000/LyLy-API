import express from "express";

import {
  register,
  verification,
  reset_password_verification,
  resend_code,
  abortChangingPassword,
  login,
  reset_password,
  deleteAccountRequest,
} from "../controllers/authController.js";

const publicRouter = express.Router();

publicRouter.get("/login", login);

publicRouter.post("/register", register);
publicRouter.post("/verify", verification);
publicRouter.post("/reverify", resend_code);
publicRouter.post("/reset_verification", reset_password_verification);
publicRouter.post("/password_reset", reset_password);

publicRouter.get("/user/:id", abortChangingPassword);

publicRouter.delete("/unregister", deleteAccountRequest);

export default publicRouter;
