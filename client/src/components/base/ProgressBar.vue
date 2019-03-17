<template>
  <div class="wrapper">
    <div class="bar">
      <div class="progress" v-bind:style="dynamicStyle"></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../../styles/main.scss";
.wrapper {
  width: $base-tag-w;
  height: $base-tag-h;
  @include flex-center;
  background-color: $athens-gray;
}
.bar {
  position: relative;
  background-color: $silver;
  //background-color: $silver;
  width: 80%;
  height: 50%;
  border-radius: 20px;
}
.progress {
  position: absolute;
  height: 100%;
  background-color: $purple-heart;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
</style>

<script>
export default {
  name: "ProgressBar",
  props: {
    fill: {
      type: String,
      required: true,
      default: 0
    }
  },
  data: function() {
    let fill = this.$props.fill;
    let styles = {
      width: fill + "%"
    };
    if (Number(fill) > 90) {
      styles["border-bottom-right-radius"] = "20px";
      styles["border-top-right-radius"] = "20px";
    }

    return {
      dynamicStyle: styles
    };
  }
};
</script>


