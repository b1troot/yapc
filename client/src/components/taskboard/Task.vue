<template>
  <tr class="task-wrapper">
    <base-tag content="Task name"/>
    <status-tag :statuses="_statuses" :currentStatus="_status" v-on:status="updateStatus"/>
    <priority-tag
      :priorities="_priorities"
      :currentPriority="_priority"
      v-on:priority="updatePriority"
    />
  </tr>
</template>

<style lang="scss" scoped>
@import "../../styles/main.scss";
.task-wrapper {
  width: auto;
  height: auto;
}
</style>

<script>
import BaseTag from "../base/BaseTag.vue";
import StatusTag from "./StatusTag.vue";
import PriorityTag from "./PriorityTag.vue";
export default {
  name: "Task",
  components: { BaseTag, StatusTag, PriorityTag },
  data: function() {
    return {
      _name: "",
      _status: "",
      _priority: "",
      _statuses: [],
      _priorities: []
    };
  },
  props: {
    name: {
      type: String
    },
    status: {
      type: String
    },
    priority: {
      type: String
    }
  },

  methods: {
    updateStatus(status) {
      this._status = status;
    },
    updatePriority(priority) {
      this._status = priority;
    }
  },
  beforeMount: function() {
    const { name, status, priority } = require("./dummyData.js").defaults.task;
    this._name = this.$props.name || name;
    this._status = this.$props.status || status;
    this._priority = this.$props.priority || priority;
    this._statuses = require("./dummyData.js").statuses;
    this._priorities = require("./dummyData.js").priorities;
  }
};
</script>
