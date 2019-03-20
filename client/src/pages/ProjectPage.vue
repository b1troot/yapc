<template>
  <div class="project-wrapper">
    <project-header/>
    <task-board :tasks="project.tasks" :handleAdd="addTask" :handleRemove="removeTask"/>
    <project-overview :project="project"/>
  </div>
</template>

<style lang="scss" scoped>
.project-wrapper {
  width: 80vw;
  height: 80vh;
}
</style>
<script>
import ProjectHeader from "../components/project/ProjectHeader.vue";
import ProjectOverview from "../components/project/ProjectOverview.vue";
import TaskBoard from "../components/taskboard/Taskboard.vue";
import EditButton from "../components/base/EditButton.vue";
import { store } from "../store.js";
export default {
  name: "ProjectPage",
  components: { ProjectHeader, TaskBoard, ProjectOverview },
  data: () => ({
    project: store.state.projects[0]
  }),
  methods: {
    addTask: function() {
      store.commit("addTask", {
        projectID: this.project.id
      });
    },

    /**
     * @todo find better way of handling removeTask
     * since passing this id up and down the tree smells
     */

    removeTask: function(id) {
      if (
        window.confirm(
          "Are you sure you want to remove the task? It WILL affect project progress"
        )
      ) {
        store.commit("removeTask", {
          projectID: this.project.id,
          taskID: id
        });
      }
    }
  }
};
</script>
