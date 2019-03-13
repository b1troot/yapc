<template>
  <div class="task-wrapper">
    <Label labelClass="task-name-container" content="Some task"/>
    <Label type="dropdown" labelClass="task-priority-container" :items="priorities"/>
    <Label type="dropdown" labelClass="task-status-container" :items="statuses"/>
    <div class="task-elapsed-container"></div>
  </div>
</template>

<style>
.task-wrapper {
  width: 50rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
}

.task-name-container {
  width: 30%;
  background-color: #c4c4c4;
  border-left: 10px solid #3f9bff;
}
.task-priority-container {
  width: 24%;
  background-color: #f52f58;
  position: relative;
}

.task-status-container {
  width: 24%;
}
.task-elapsed-container {
  width: 20%;
  background-color: #3f9bff;
}
</style>

<script>
import "../../styles/colors.css";
import Label from "./Label.vue";
export default {
  name: "Task",
  components: { Label },
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
