import * as mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  user: {
    type: { type: String },
    required: true,
  },
  task: [
    {
      id: { type: Number },
      title: { type: String },
      text: {
        type: String,
        default: "No tasks yet!",
      },
    },
  ],
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
