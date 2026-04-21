import wrapper from "../middlewares/asyncWrapper.js";
import TaskModel from "../models/task.js";

const getAll = wrapper(async (req, res) => {
  const userEmail = req.user.email;
  const tasks = await TaskModel.findOne({ user: userEmail }, { __v: false });

  return res.status(200).json({
    status: 200,
    data: tasks,
  });
});

const getById = wrapper(async (req, res) => {
  const userEmail = req.user.email;

  const data = await TaskModel.findOne({ user: userEmail }, { __v: false });

  const task = data.tasks.find((task) => String(task._id) === req.params.id);

  return res.status(200).json({
    status: 200,
    data: task,
  });
});

const post = wrapper(async (req, res) => {
  const userEmail = req.user.email;
  const { title, text } = req.body;
  const newTask = { title, text };

  await TaskModel.findOneAndUpdate(
    { user: userEmail },
    { $push: { tasks: newTask } },
    { returnDocument: "after", runValidators: true },
  );

  return res.status(201).json({
    status: 201,
    data: newTask,
  });
});

const patchById = wrapper(async (req, res) => {});

const deleteById = wrapper(async (req, res) => {});

export { getAll, getById, post, patchById, deleteById };
