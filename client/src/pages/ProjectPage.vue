<template>
  <div class="project-wrapper">
    <task-board :tasks="project.tasks" :handleAdd="addTask" :handleRemove="removeTask"/>
  </div>
</template>

<style lang="scss" scoped>
.project-wrapper {
  width: 80vw;
  height: 80vh;
}
</style>
<script>
import TaskBoard from "../components/taskboard/Taskboard.vue";
import EditButton from "../components/base/EditButton.vue";
import { store } from "../store.js";
export default {
  name: "ProjectPage",
  components: { TaskBoard },
  data: () => ({
    project: store.state.projects[0]
  }),
  methods: {
    addTask: function() {
      let newTask = {
        id: `${Math.random() * 125670}`,
        name: "task name",
        priority: "low",
        status: "fresh"
      };
      store.commit("addTask", {
        projectID: this.project.id,
        task: newTask
      });
    },
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
