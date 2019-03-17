<template>
  <table>
    <thead></thead>
    <tbody>
      <tr>
        <base-tag tagClass="name-label" content="Test project"/>
        <progress-bar progress="89"/>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@import "../../styles/main.scss";
.name-label {
  border-left: 10px solid $doger-blue;
  color: $doger-blue;
}
</style>



<script>
import BaseTag from "../base/BaseTag.vue";
import ProgressBar from "../base/ProgressBar.vue";
export default {
  name: "ProjectsBoard.vue",
  components: { BaseTag, ProgressBar }
};
</script>
