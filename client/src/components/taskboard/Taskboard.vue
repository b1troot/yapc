<template>
  <table class="taskboard">
    <task-bar :labels="labelsCollection" :handleAdd="handleAdd"></task-bar>
    <tbody v-for="task in tasks" :key="task.id">
      <Task :task="task" :editable="true" :handleRemove="handleRemove"/>
    </tbody>
  </table>
</template>
<script>
import TaskBar from "./TaskBar.vue";
import Task from "./Task.vue";
import TaskForm from "./TaskForm.vue";
import { taskboardLabels } from "./taskboard.config.js";
export default {
  name: "Taskboard",
  components: { TaskBar, Task, TaskForm },
  data: () => ({
    /**
     * @todo change it to load labels from store, or hardcode it!
     */

    labelsCollection: taskboardLabels
  }),
  props: {
    tasks: {
      type: Array,
      required: true
    },
    handleAdd: {
      type: Function
    },
    handleRemove: {
      type: Function
    }
  },
  beforeDestroy: () => {
    this.labelsCollection = null;
  }
};
</script>


    <style lang="scss" scoped></style>