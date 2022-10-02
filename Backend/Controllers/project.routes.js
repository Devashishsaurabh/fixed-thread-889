const express = require("express");
const Project = require("../Models/project.schema");
const User = require("../Models/user.schema");

const projectController = express.Router();

projectController.get("/", async (req, res) => {
  const { userEmail } = req.body;
  const user = await Project.findOne({ userEmail: userEmail });
  if (!user) {
    return res.status(401).send([]);
  }
  const projects = await Project.find({ userEmail: userEmail });

  try {
    res.status(200).send(projects);
  } catch (err) {
    res.status(500).send("please try again");
  }
});

projectController.post("/create", async (req, res) => {
  const { name, tag, billable, userEmail, userId } = req.body;
  // const user = await User.findOne({ email: useremail });
  if (!userEmail) {
    return res.status(401).send("Unauthenticated User!");
  }

  try {
    const newProject = Project.create({
      name,
      tag,
      billable,
      userEmail,
      userId,
    });
    res
      .status(201)
      .send({ message: "Project added successfully!", newProject });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

projectController.patch("/update/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const { mail } = req.query;
  const user = await User.find({ email: mail });
  if (!user) {
    return res.status(401).send("Unauthenticated User!");
  }
  const { name, tag, billable, userEmail, userId } = req.body;

  try {
    const data = await Project.findByIdAndUpdate({ _id: projectId }, req.body, {
      new: true,
    });
    res.status(200).send({ message: "Project updated!", data });
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

projectController.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { mail } = req.query;
  const user = await User.find({ email: mail });
  if (!user) {
    return res.status(401).send("Unauthenticated User!");
  }

  try {
    await Project.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "Project Deleted" });
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = projectController;
