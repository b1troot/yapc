<template>
  <projects-board/>
</template>
<style scoped>
</style>

<script>
//import Taskboard from "./components/taskboard/Taskboard.vue";
import ProjectsBoard from "./components/project/ProjectsBoard.vue";
export default {
  name: "App",
  components: { ProjectsBoard }
};
</script>
