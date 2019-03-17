<template>
  <thead>
    <tr class="taskbar">
      <td v-for="(label,index) in labels" :key="index" :class="label.color">
        <p>{{label.name}}</p>
      </td>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
@import "../../styles/main.scss";
.taskbar {
  font-size: 15px;
  & > td > p {
    @include flex-center;
  }
}
.taskbar-label-name {
  color: $purple-heart;
}
.taskbar-label-generic {
  color: darken($silver, 20);
}
</style>


<script>
export default {
  name: "TaskBar",
  props: {
    labels: {
      type: Array,
      required: true
    }
  }
};
</script>

