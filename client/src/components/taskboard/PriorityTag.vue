<template>
  <base-dropdown
    class="base-dropdown"
    :options="priorities"
    :taskID="taskID"
    :projectID="projectID"
    field="priority"
    :task="task"
    :handleChange="changePriority"
  />
</template>

<style scoped lang="scss">
@import "../../styles/main.scss";
</style>

<script>
import BaseDropdown from "../base/BaseDropdown.vue";
import { store } from "../../store.js";
export default {
  name: "PriorityTag",
  components: { BaseDropdown },

  props: {
    task: {
      type: Object
    },
    taskID: {
      type: String
    },
    projectID: {
      type: String
    }
  },
  data: () => ({
    priorities: store.state.config.priorities
  }),

  methods: {
    changePriority: function(data) {
      this.$emit("priority", data.label);
    }
  }
};
</script>
