const { generateID } = require("../lib/generateID.js");

const PROJECT_PREFIX = "PID";
const generateProjectID = () => generateID(PROJECT_PREFIX);
const PROJECT_DEFAULTS = {
  name: "New project",
  deadline: "--------------",
  tasks: [],
  completed: 0
};

const Project = (data = {}) => {
  const id = generateID(PROJECT_PREFIX);
  const { name, deadline, tasks, completed } = PROJECT_DEFAULTS;
  const _name = data.name || name;
  const _deadline = data.deadline || deadline;
  const _tasks = data.tasks || tasks;
  const _completed = data.completed || completed;
  return {
    id: generateProjectID(),
    name: _name,
    deadline: _deadline,
    tasks: _tasks,
    completed: _completed
  };
};

module.exports = {
  Project
};
