import wrapper from "../middlewares/asyncWrapper.js";
import TaskModel from "../models/task.js";

const getAll = wrapper(async (req, res) => {});

const getByTitle = wrapper(async (req, res) => {});

const post = wrapper(async (req, res) => {});

const patchByTitle = wrapper(async (req, res) => {});

const deleteByTitle = wrapper(async (req, res) => {});

export { getAll, getByTitle, post, patchByTitle, deleteByTitle };
