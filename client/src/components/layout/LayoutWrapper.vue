<template>
  <div class="layout-wrapper">
    <slot name="header"></slot>
    <slot name="side-nav"></slot>
    <slot name="main-content"></slot>
    <slot name="footer"></slot>
  </div>
</template>


<script>
import LayoutHeader from "./LayoutHeader.vue";

export default {
  name: "LayoutWrapper"
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 10vh auto;
}
</style>

