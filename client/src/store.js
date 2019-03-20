import Vue from "vue";
import Vuex from "vuex";
import { mockProjects } from "./mockData.js";
import { Task } from "../models/task.model.js";

// helper function for finding project by its id
const projectById = (projects, id) => {
  for (let project of projects) {
    if (project.id === id) {
      return project;
    }
  }
};

// more dry version

const getById = (state, id) => state.filter(item => item.id === id)[0];
const exclude = (state, id) => state.filter(item => item.id !== id);
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    projects: mockProjects,
    config: {
      statuses: require("./config.js").statuses,
      priorities: require("./config.js").priorities
    }
  },
  mutations: {
    addTask(state, { projectID }) {
      let task = Task({ owner: projectID });
      getById(state.projects, projectID).tasks.push(task);
      //projectById(state.projects, projectID).tasks.push(task);
    },
    removeTask(state, payload) {
      const { projectID, taskID } = payload;
      let project = getById(state.projects, projectID);
      //let project = projectById(state.projects, projectID);
      project.tasks = exclude(project.tasks, taskID);
      //project.tasks = project.tasks.filter(task => task.id != taskID);
    },
    editTask(state, { owner, taskID, field, value }) {
      //const { field, value, owner } = payload;
      let project = getById(state.projects, owner);
      //console.log(project);

      let task = getById(project.tasks, taskID);
      task[field] = value;
      //getById(state.projects, owner).tasks[getById(taskID)][field] = value;
    }
  }
});
