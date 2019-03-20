<template>
  <thead>
    <tr class="taskbar">
      <td v-for="(label,index) in labels" :key="index" :class="label.color">
        <p v-if="label.name">{{label.name}}</p>
        <p v-if="label.icon" class="icon-container">
          <i :class="label.icon" v-on:click="handleAdd"></i>
        </p>
      </td>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "TaskBar",
  props: {
    labels: {
      type: Array,
      required: true
    },
    handleAdd: {
      type: Function
    }
  }
};
</script>


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
.icon-container {
  @include flex-center;
}
.plus-icon {
  font-size: 1.2em;
  color: darken($silver, 40);
  cursor: pointer;
  &:hover {
    color: $doger-blue;
  }
}
</style>

