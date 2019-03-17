<template>
  <base-tag tagClass="taskname-tag" :content="taskname"/>
</template>

<style lang="scss" scoped>
@import "../../styles/main.scss";
.taskname-tag {
  color: $purple-heart;
  width: $long-tag-w;
  border-left: 10px solid $purple-heart;
}
</style>


<script>
import BaseTag from "../base/BaseTag.vue";
export default {
  name: "NameTag",
  components: { BaseTag },
  props: {
    taskname: {
      type: String,
      required: true
    }
  }
};
</script>
