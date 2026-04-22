import wrapper from "../middlewares/asyncWrapper.js";
import TaskModel from "../models/task.js";

const getAll = wrapper(async (req, res) => {
  const userEmail = req.user.email;
  const tasks = await TaskModel.findOne({ user: userEmail }, { __v: false });

  return res.status(200).json({
    status: 200,
    message: `Get all tasks for user: ${userEmail}`,
    data: tasks,
  });
});

const getById = wrapper(async (req, res) => {
  const userEmail = req.user.email;

  const data = await TaskModel.findOne({ user: userEmail }, { __v: false });

  const task = data.tasks.find((task) => String(task._id) === req.params.id);

  if (!task) {
    return res.status(404).json({
      status: 404,
      message: `Task with id [ ${req.params.id} ] was not found`,
      data: null,
    });
  }

  return res.status(200).json({
    status: 200,
    message: `Get task [ ${req.params.id} ] for user: ${userEmail}`,
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
    message: `Task created sucessfully`,
    data: newTask,
  });
});

const patchById = wrapper(async (req, res) => {
  const userEmail = req.user.email;
  const { title, text } = req.body;

  const data = await TaskModel.findOne({ user: userEmail }, { __v: false });

  const task = data.tasks.find((task) => String(task._id) === req.params.id);

  if (!task) {
    return res.status(404).json({
      status: 404,
      message: `Task with id [ ${req.params.id} ] was not found`,
      data: null,
    });
  }

  task.title = title !== undefined ? title : task.title;
  task.text = text !== undefined ? text : task.text;

  await data.save();

  return res.status(202).json({
    status: 202,
    message: `Task updated sucessfully`,
    data: task,
  });
});

const deleteById = wrapper(async (req, res) => {
  const userEmail = req.user.email;
  const data = await TaskModel.findOne({ user: userEmail }, { __v: false });

  if (!data.tasks.find((task) => String(task._id) !== req.params.id)) {
    return res.status(404).json({
      status: 404,
      message: `Task with id [ ${req.params.id} ] was not found`,
      data: null,
    });
  }

  data.tasks = data.tasks.filter((task) => String(task._id) !== req.params.id);

  await data.save();

  return res.status(202).json({
    status: 202,
    message: `Deleted task sucessfully`,
    data: null,
  });
});

export { getAll, getById, post, patchById, deleteById };
