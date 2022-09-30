const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  tag: String,
  billable: { type: Boolean, required: true },
  userEmail: { type: String, required: true },
  userId: { type: String, required: true },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
