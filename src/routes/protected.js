import express from "express";

import {
  getAll,
  getById,
  post,
  patchById,
  deleteById,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/tasks").get(getAll).post(post);

router
  .route("/task/:id")
  .get(getById)
  .patch((req, res, next) => {})
  .delete((req, res, next) => {});

export default router;
