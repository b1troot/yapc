<template>
  <tr>
    <base-tag tagClass="name-tag" :content="name"/>
    <base-tag tagClass="start-tag" :content="start"/>
    <base-tag tagClass="deadline-tag" :content="deadline"/>
    <progress-bar :fill="progress"/>
    <base-tag tagClass="tasks-tag" :content="`${tasks}`"/>
    <base-tag tagClass="completed-tag" :content="`${completed}`"/>
  </tr>
</template>

<style scoped lang="scss">
@import "../../styles/main.scss";

.name-tag {
  border-left: 10px solid $doger-blue;
  color: $doger-blue;
}
.start-tag {
  background-color: $caribbean-green;
}
.deadline-tag {
  background-color: $radical-red;
}
.tasks-tag {
  width: $short-tag-w;
  background-color: $athens-gray;
  color: $web-orange;
  font-weight: bolder;

  //background-color: $web-orange;
}
.completed-tag {
  width: $short-tag-w;
  background-color: $athens-gray;
  color: $doger-blue;
  font-weight: bolder;
  //background-color: $doger-blue;
}
</style>



<script>
import BaseTag from "../base/BaseTag.vue";
import ProgressBar from "../base/ProgressBar.vue";
export default {
  name: "ProjectsDeadline",
  components: { BaseTag, ProgressBar },
  props: {
    name: {
      type: String,
      required: true,
      default: "New task"
    },
    start: {
      type: String,
      required: true,
      default: "-------------"
    },
    deadline: {
      type: String,
      required: true,
      default: "-------------"
    },
    progress: {
      type: Number,
      required: true,
      default: 0
    },
    tasks: {
      type: Number,
      required: true,
      default: 0
    },
    completed: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>
