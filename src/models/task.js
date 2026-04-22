import * as mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  tasks: [
    {
      title: {
        type: String,
        maxLength: [20, "Exeeded title length limit (max up to 20 characters)"],
        required: true,
      },
      text: {
        type: String,
        maxLength: [
          200,
          "Exeeded text length limit (max up to 200 characters)",
        ],
        default: "No tasks yet!",
      },
    },
  ],
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
