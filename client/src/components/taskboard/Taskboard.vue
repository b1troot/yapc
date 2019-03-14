<template>
  <table class="taskboard">
    <thead>
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </thead>
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
import Task from "./Task.vue";
export default {
  name: "Taskboard",
  components: { Task }
};
</script>

