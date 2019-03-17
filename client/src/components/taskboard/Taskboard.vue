<template>
  <table class="taskboard">
    <task-bar :labels="labelsCollection"></task-bar>
    <tbody>
      <Task/>
      <Task/>
      <Task/>
    </tbody>
  </table>
</template>
<style lang="scss" scoped>
.taskboard {
}
</style>
<script>
import TaskBar from "./TaskBar.vue";
import Task from "./Task.vue";
import { taskboardLabels } from "./taskboard.config.js";
export default {
  name: "Taskboard",
  components: { TaskBar, Task },
  data: () => ({
    labelsCollection: taskboardLabels
  }),

  beforeDestroy: () => {
    this.labelsCollection = null;
  }
};
</script>

