import * as mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  id: Number,
  title: String,
  text: {
    type: String,
    default: "No task yet!",
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
