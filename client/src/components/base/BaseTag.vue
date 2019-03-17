<template>
  <td class="base-tag" :class="tagClass">
    <p>{{content}}</p>
  </td>
</template>
<style lang="scss" scoped>
@import "../../styles/main.scss";
.base-tag {
  width: $base-tag-w;
  //height: $base-tag-h;
  background-color: $athens-gray;
  color: $main-bright-color;

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
    },
    tagClass: {
      type: String
    }
  }
};
</script>
