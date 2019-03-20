<template>
  <nav>
    <ul>
      <li v-for="(component,index) in mainComponents" :key="index">
        <i :class="component.icon" v-on:click="selectComponent(index)"></i>
      </li>
    </ul>
  </nav>
</template>


<script>
import { store } from "../../store.js";
export default {
  name: "LayoutSideNav",
  data: function() {
    return {
      mainComponents: store.state.config.mainComponents
    };
  },
  methods: {
    selectComponent: function(index) {
      store.commit("selectMainComponent", index);
    }
  },
  beforeMount: function() {
    this.selectComponent(0);
  }
};
</script>



<style lang="scss" scoped>
@import "../../styles/main.scss";
nav {
  background-color: $main-dark-color;
  color: lighten($purple-heart, 15);
  grid-column: 1/2;

  & > ul {
    height: 50%;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 2em;
  }
}
</style>