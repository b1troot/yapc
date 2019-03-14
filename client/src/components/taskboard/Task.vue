<template>
  <div class="task-wrapper">
    <status-tag/>
    <priority-tag/>
  </div>
</template>

<style>
.task-wrapper {
  width: 50rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import "../../styles/colors.css";

import StatusTag from "./StatusTag.vue";
import PriorityTag from "./PriorityTag.vue";
export default {
  name: "Task",
  components: { StatusTag, PriorityTag },
  data: function() {
    return {
      priorities: null,
      statuses: null
    };
  },
  beforeMount: function() {
    const { priorities, statuses } = require("./dummyData.js");
    this.priorities = priorities;
    this.statuses = statuses;
  }
};
</script>
