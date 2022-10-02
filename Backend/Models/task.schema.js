const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  tag: { type: String, required: true },
  billable: { type: Boolean, required: true },
  startAt: { type: String, required: true },
  endAt: { type: String, required: true },
  projectName: { type: String, requied: true },
  userEmail: { type: String, required: true },
  userId: { type: String, required: true },
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
