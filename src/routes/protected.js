import express from "express";

import { getAll } from "../controllers/taskController.js";

const router = express.Router();

router
  .route("/tasks")
  .get(getAll)
  .post((req, res, next) => {});

router
  .route("/task/:title")
  .get((req, res, next) => {})
  .patch((req, res, next) => {})
  .delete((req, res, next) => {});

export default router;
