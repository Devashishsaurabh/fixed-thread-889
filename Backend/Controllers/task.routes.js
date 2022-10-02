const express = require("express");
const Task = require("../Models/task.schema");

const taskController = express.Router();

taskController.get("/", async (req, res) => {
  const { userEmail } = req.body;
  const { project } = req.query;
  const task = await Task.find({ project, userEmail });
  try {
    if (task.length === 0) {
      res.status(401).send("No Task");
    } else {
      res.status(200).send(task);
    }
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

taskController.post("/create", async (req, res) => {
  try {
    const newTask = Task.create(req.body);
    res.status(201).send({ message: "New task added!", newTask });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

taskController.patch("/update/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const update = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
  });
  res.status(200).send({ message: "Task updated!", update });
});

taskController.delete("/delete/:taskId", async (req, res) => {
  const { taskId } = req.params;
  await Task.findByIdAndDelete({ _id: taskId });
  res.status(200).send({ message: "Task Deleted!" });
});

module.exports = taskController;
