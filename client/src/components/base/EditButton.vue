<template>
  <div class="btn-wrapper">
    <i class="far fa-trash-alt trash-icon" v-on:click="handleRemove(id)"></i>
  </div>
</template>
<style lang="scss" scoped>
@import "../../styles/main.scss";
.btn-wrapper {
  width: 3.5em;
  height: 3em;
  background-color: $athens-gray;
  @include flex-center;
}
.trash-icon {
  cursor: pointer;
  color: darken($silver, 40);
  &:hover {
    color: $radical-red;
  }
}
</style>

<script>
export default {
  name: "EditButton",
  props: {
    handleRemove: {
      type: Function
    },
    id: {
      type: String
    }
  }
};
</script>


