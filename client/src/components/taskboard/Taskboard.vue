<template>
  <div class="taskboard">
    <Task/>
    <Task/>
    <Task/>
  </div>
</template>
<style scoped>
.taskboard {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
<script>
import Task from "./Task.vue";
export default {
  name: "Taskboard",
  components: { Task }
};
</script>

