import Vue from "vue";
import App from "./App.vue";

const VueApp = new Vue({
  el: "#vue-container",
  template: "<App />",
  components: { App }
});
console.log("Working");
