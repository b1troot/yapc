<template>
  <main>
    <component v-bind:is="current"/>
  </main>
</template>

<style lang="scss" scoped>
main {
  grid-column: 2/13;
}
</style>


<script>
import ProjectPage from "../../pages/ProjectPage.vue";
import MainPage from "../../pages/MainPage.vue";
import { store } from "../../store.js";
export default {
  name: "LayoutMain",
  components: { ProjectPage, MainPage },

  computed: {
    current: () => store.state.config.currentMainComponent.name
  }
};
</script>
