<template>
  <base-dropdown
    class="base-dropdown"
    dropdownClass="statusTag"
    :handleChange="changeStatus"
    :options="statuses"
    :taskID="taskID"
    :owner="owner"
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
    owner: {
      type: String
    }
  },
  data: () => ({
    statuses: store.state.config.statuses
  }),
  methods: {
    changeStatus: function(data) {
      //this.$emit("status", data.label);
    }
  }
};
</script>
