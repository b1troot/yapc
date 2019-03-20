<template>
  <tr class="task-wrapper">
    <name-tag :taskname="task.name"/>
    <status-tag
      :currentStatus="task.status"
      :task="task"
      :taskID="task.id"
      :owner="task.owner"
      v-on:status="updateStatus"
    />

    <priority-tag
      :currentPriority="task.priority"
      :task="task"
      :taskID="task.id"
      :owner="task.owner"
      v-on:priority="updatePriority"
    />

    <base-tag tagClass="sessions-tag" :content="`${task.sessions}`"/>
    <base-tag tagClass="session-len-tag" :content="`${task.sessionLength} min`"/>
    <base-tag tagClass="minutes-tag" :content="`${task.totalTime} min`"/>
    <edit-button v-if="editable" :handleRemove="handleRemove" :id="task.id"/>
  </tr>
</template>


<style lang="scss" scoped>
@import "../../styles/main.scss";
.task-wrapper {
  width: auto;
  height: auto;
}
.sessions-tag {
  width: $short-tag-w;
  background-color: $supernova;
}
.session-len-tag {
  width: $short-tag-w;
  background-color: $silver;
}
.minutes-tag {
  width: $medium-tag-w;
  background-color: $international-orange;
}
</style>


<script>
import BaseTag from "../base/BaseTag.vue";
import NameTag from "./NameTag.vue";
import StatusTag from "./StatusTag.vue";
import PriorityTag from "./PriorityTag.vue";
import EditButton from "../base/EditButton.vue";

export default {
  name: "Task",
  components: { NameTag, BaseTag, StatusTag, PriorityTag, EditButton },
  data: function() {
    /**
     * @todo rebuild data flow, include store
     */
    return {};
  },
  props: {
    task: {
      type: Object
    },
    handleRemove: {
      type: Function
    },
    name: {
      type: String,
      default: "new task"
    },
    status: {
      type: String
    },
    priority: {
      type: String
    },
    sessionsDone: {
      type: Number,
      default: 0
    },
    sessionLength: {
      type: Number,
      default: 25
    },
    totalTime: {
      type: Number,
      default: 0
    },
    editable: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    updateStatus(status) {},
    updatePriority(priority) {}
  },
  beforeMount: function() {
    //const { name, status, priority } = require("./dummyData.js").defaults.task;
    //this._name = this.$props.name || name;
    //this._status = this.$props.status || status;
    //this._priority = this.$props.priority || priority;
    //this._statuses = require("./dummyData.js").statuses;
    //this._priorities = require("./dummyData.js").priorities;
  }
};
</script>
