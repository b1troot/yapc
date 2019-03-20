const { generateID } = require("../lib/generateID.js");
const { statuses, priorities } = require("../src/config.js");

//const STATUSES = ["fresh", "in progress", "done"];
//const PRIORITIES = ["low", "medium", "high"];

const TASK_PREFIX = "TID_";
const generateTaskID = () => generateID(TASK_PREFIX);

const TASK_DEFAULTS = {
  name: "New task",
  status: 1,
  priority: 1,
  sessionLength: 25,
  sessions: 0,
  totalTime: 0
};

const Task = (data = {}) => ({
  id: generateTaskID(),
  owner: data.owner,
  name: data.name || TASK_DEFAULTS.name,
  status: data.status || TASK_DEFAULTS.status,
  priority: data.priority || TASK_DEFAULTS.priority,
  sessionLength: data.sessionLength || TASK_DEFAULTS.sessionLength,
  sessions: data.sessions || TASK_DEFAULTS.sessions,
  totalTime: data.totalTime || TASK_DEFAULTS.totalTime
});

module.exports = {
  Task
};
