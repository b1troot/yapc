module.exports = {
  statuses: [
    {
      id: "ds13m",
      label: "fresh",
      etiquette: "neutral-label",
      selected: true
    },
    {
      id: "d2svd4",
      label: "In progress",
      etiquette: "authority-label",
      selected: false
    },
    {
      id: "f76sd",
      label: "Done",
      etiquette: "success-label",
      selected: false
    }
  ],
  priorities: [
    {
      id: "d3434",
      label: "Low",
      etiquette: "success-label",
      selected: true
    },
    {
      id: "d34sd4",
      label: "Medium",
      etiquette: "warm-label",
      selected: false
    },
    {
      id: "dhy54d4",
      label: "High",
      etiquette: "danger-label",
      selected: false
    }
  ],
  tasks: [
    {
      name: "Task number one",
      priority: "low",
      status: "fresh"
    },
    {
      name: "Task number two",
      priority: "low",
      status: "fresh"
    },
    {
      name: "Task number three",
      priority: "low",
      status: "fresh"
    }
  ],
  defaults: {
    task: {
      name: "New task",
      priority: {
        id: "d3434",
        label: "Low",
        etiquette: "success-label",
        selected: true
      },
      status: {
        id: "ds13m",
        label: "fresh",
        etiquette: "neutral-label",
        selected: true
      }
    }
  }
};
