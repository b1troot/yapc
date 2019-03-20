<template>
  <base-dropdown
    class="base-dropdown"
    dropdownClass="statusTag"
    :handleChange="changeStatus"
    :options="statuses"
    :taskID="taskID"
    :projectID="projectID"
    field="status"
    :task="task"
  />
</template>
<style scoped lang="scss">
@import "../../styles/main.scss";
</style>

<script>
import BaseDropdown from "../base/BaseDropdown.vue";
import { store } from "../../store.js";
export default {
  name: "StatusTag",
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
    statuses: store.state.config.statuses
  })
};
</script>
