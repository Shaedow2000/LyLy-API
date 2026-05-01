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
  deleteAccountConfirmation,
} from "../controllers/authController.js";

const publicRouter = express.Router();

publicRouter.get("/login", login);

publicRouter.post("/register", register);
publicRouter.post("/verify", verification);
publicRouter.post("/reverify", resend_code);
publicRouter.post("/reset_verification", reset_password_verification);
publicRouter.patch("/password_reset", reset_password);

publicRouter.get("/user/:id", abortChangingPassword);

publicRouter.post("/unregister", deleteAccountRequest);
publicRouter.delete("/confirmation", deleteAccountConfirmation);

export default publicRouter;
