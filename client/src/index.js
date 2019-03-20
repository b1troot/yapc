import Vue from "vue";
import App from "./App.vue";
//import VueRouter from "vue-router";
import "./styles/main.css";
//import ProjectPage from "./pages/ProjectPage.vue";
/*
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  //base: __dirname,
  routes: [
    {
      path: "/",
      components: {
        project: ProjectPage
      }
    }
  ]
});
*/
const VueApp = new Vue({
  el: "#vue-container",
  template: "<App />",
  components: { App }
});
