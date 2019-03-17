<template>
  <table class="project">
    <table-header :labels="projectLabels"/>
    <tbody>
      <project-deadline/>
      <project-deadline/>
      <project-deadline/>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@import "../../styles/main.scss";
.project {
  font-size: 1rem;
}
</style>



<script>
import TableHeader from "../base/TableHeader.vue";
import ProjectDeadline from "./ProjectDeadline.vue";
export default {
  name: "ProjectsBoard",
  components: { TableHeader, ProjectDeadline },
  data: () => ({
    projectLabels: require("./project.config.js").projectLabels
  })
};
</script>
