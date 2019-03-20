import Vue from "vue";
import Vuex from "vuex";
import { mockProjects } from "./mockData.js";
import { Task } from "../models/task.model.js";
import { statuses, priorities, mainComponents } from "./config.js";

// helper function for finding projects and tasks by their id

const getItem = (collection, id) => {
  for (let item of collection) {
    if (item.id === id) return item;
  }
};

// helper function for filtering item out of array
const exclude = (collection, id) => collection.filter(item => item.id !== id);

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    config: {
      statuses: statuses,
      priorities: priorities,
      mainComponents: mainComponents,
      currentMainComponent: null
    },
    projects: mockProjects
  },

  mutations: {
    addTask(state, { projectID }) {
      getItem(state.projects, projectID).tasks.push(Task({ owner: projectID }));
    },
    removeTask(state, { projectID, taskID }) {
      let tasks = getItem(state.projects, projectID).tasks;
      getItem(state.projects, projectID).tasks = exclude(tasks, taskID);
    },
    editTask(state, { projectID, taskID, field, value }) {
      let task = getItem(getItem(state.projects, projectID).tasks, taskID);

      if (field === "status") {
        if (value === 3 && task.status !== 3)
          getItem(state.projects, projectID).completed++;
        else if (value < 3 && task.status === 3)
          getItem(state.projects, projectID).completed--;
      }
      task[field] = value;
    },
    icrementDone(state, projectID) {
      getItem(state.projects, projectID).completed++;
    },
    decrementDone(state, projectID) {
      getProject.call(null, state, projectID).completed--;
    },
    selectMainComponent(state, index) {
      state.config.currentMainComponent = state.config.mainComponents[index];
    }
  }
});
