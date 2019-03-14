<template>
  <td class="base-tag base-label">
    <p>{{content}}</p>
  </td>
</template>
<style lang="scss" scoped>
@import "../../styles/main.scss";
.base-tag {
  color: $purple-heart;
  width: $base-tag-w;
  height: $base-tag-h;
  border-left: 10px solid $purple-heart;

  & > p {
    width: 100%;
    height: 100%;
    @include flex-center;
  }
}
</style>

<script>
export default {
  name: "BaseTag",
  props: {
    content: {
      type: String
    }
  }
};
</script>
