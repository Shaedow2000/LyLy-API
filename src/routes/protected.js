import express from "express";

import {
  getAll,
  getById,
  post,
  patchById,
  deleteById,
} from "../controllers/noteController.js";

const router = express.Router();

router.route("/notes").get(getAll).post(post);

router.route("/note/:id").get(getById).patch(patchById).delete(deleteById);

export default router;
