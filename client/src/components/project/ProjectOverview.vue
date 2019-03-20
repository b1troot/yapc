<template>
  <table>
    <thead></thead>
    <tbody>
      <project-deadline
        name="Project overview"
        :start="project.startedAt"
        :deadline="project.deadline"
        :progress="progress"
        :completed="completed"
        :tasks="project.tasks.length"
      />
    </tbody>
  </table>
</template>

<script>
import BaseTag from "../base/BaseTag.vue";
import ProjectDeadline from "./ProjectDeadline.vue";
export default {
  name: "ProjectOverview",
  components: { ProjectDeadline },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    completed: function() {
      return this.$props.project.tasks.filter(task => task.status === 3).length;
    },
    progress: function() {
      return this.completed === 0
        ? 0
        : Math.round((this.completed / this.$props.project.tasks.length) * 100);
    }
  }
};
</script>
