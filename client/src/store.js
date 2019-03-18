import Vue from "vue";
import Vuex from "vuex";
import { mockProjects } from "./mockData.js";

// helper function for finding project by its id
const projectById = (projects, id) => {
  for (let project of projects) {
    if (project.id === id) {
      return project;
    }
  }
};

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    projects: mockProjects
  },
  mutations: {
    addTask(state, payload) {
      const { projectID, task } = payload;
      projectById(state.projects, projectID).tasks.push(task);
    },
    removeTask(state, payload) {
      const { projectID, taskID } = payload;
      let project = projectById(state.projects, projectID);
      project.tasks = project.tasks.filter(task => task.id != taskID);
    }
  }
});
