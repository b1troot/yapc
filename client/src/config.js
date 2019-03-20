const labelFactory = (name, value, styling) => ({ name, value, styling });

const statuses = [
  labelFactory("Fresh", 1, "fresh-status-label"),
  labelFactory("In progress", 2, "progress-status-label"),
  labelFactory("Done", 3, "done-status-label")
];
const priorities = [
  labelFactory("Low", 1, "low-priority-label"),
  labelFactory("Medium", 2, "medium-priority-label"),
  labelFactory("High", 3, "high-priority-label")
];

module.exports = {
  statuses,
  priorities
};
