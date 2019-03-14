import Vue from "vue";
import App from "./App.vue";
import "./styles/main.css";

const VueApp = new Vue({
  el: "#vue-container",
  template: "<App />",
  components: { App }
});
