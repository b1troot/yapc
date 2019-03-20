<template>
  <layout-wrapper>
    <template v-slot:header>
      <layout-header/>
    </template>
    <template v-slot:side-nav>
      <layout-side-nav/>
    </template>
  </layout-wrapper>
</template>
<style scoped>
</style>

<script>
//import Taskboard from "./components/taskboard/Taskboard.vue";
//import ProjectsBoard from "./components/project/ProjectsBoard.vue";
//import ProjectPage from "./pages/ProjectPage.vue";
import LayoutWrapper from "./components/layout/LayoutWrapper.vue";
import LayoutHeader from "./components/layout/LayoutHeader.vue";
import LayoutSideNav from "./components/layout/LayoutSideNav.vue";
export default {
  name: "App",
  components: { LayoutWrapper, LayoutHeader, LayoutSideNav }
};
</script>
