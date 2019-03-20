const { Task } = require("../models/task.model.js");
const { Project } = require("../models/project.model.js");

const task1 = Task({
  name: "task number one",
  owner: "3fdd763b",
  status: 2
});

const task2 = Task({
  name: "task number two",
  status: 1,
  priority: "medium",
  sessionLength: 25,
  sessionsDone: 4,
  timeSpend: 100
});

const project1 = Project({
  tasksNum: 2,
  //startedAt: "16.03.2019",
  deadline: "02.04.2019",
  daysLeft: 16,
  tasks: [],
  completed: 0
});

const mockProjects = [project1];
module.exports = {
  mockProjects
};
