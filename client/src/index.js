import Vue from "vue";
import App from "./App.vue";
import "./styles/main.css";
//import Vuex from "vuex";
//import { mockProjects } from "./mockData.js";

/*

Vue.use(Vuex);
const store = new Vuex.store({
  state: {
    projects: mockProjects
  },
  mutations: {
    addTask(state, payload) {
      const { projectID, task } = payload;
      projectById(state.projects, projectID).push(task);
    },
    removeTask(state, payload) {
      const { projectID, taskID } = payload;
      let project = projectById(state.projects, projectID);
      project.tasks = project.tasks.filter(task => task.id != taskID);
    }
  }
});
*/
const VueApp = new Vue({
  el: "#vue-container",
  template: "<App />",
  components: { App }
});
