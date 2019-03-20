<template>
  <table>
    <thead></thead>
    <tbody>
      <project-deadline
        name="Project overview"
        :start="project.startedAt"
        :deadline="project.deadline"
        :progress="progress"
        :completed="project.completed"
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
    progress: function() {
      let project = this.$props.project;
      let tasks = project.tasks.length;

      let completed = project.completed;
      if (completed === 0) return 0;

      return Math.round((completed / tasks) * 100);
    }
  }
};
</script>
