import * as mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  tasks: [
    {
      id: { type: Number },
      title: { type: String, required: true },
      text: {
        type: String,
        default: "No tasks yet!",
      },
    },
  ],
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
