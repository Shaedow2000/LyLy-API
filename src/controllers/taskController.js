import wrapper from "../middlewares/asyncWrapper.js";
import TaskModel from "../models/task.js";

const getAll = wrapper(async (req, res) => {
  const userEmail = req.user.email;
  const tasks = await TaskModel.find({ user: userEmail }, { __v: false });

  return res.status(200).json({
    status: 200,
    data: tasks,
  });
});

const getById = wrapper(async (req, res) => {});

const post = wrapper(async (req, res) => {});

const patchById = wrapper(async (req, res) => {});

const deleteById = wrapper(async (req, res) => {});

export { getAll, getById, post, patchById, deleteById };
