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
  background-color: black; //$athens-gray;
}
.bar {
  position: relative;
  background-color: $silver;
  width: 80%;
  height: 60%;
  border-radius: 20px;
}
.progress {
  position: absolute;
  height: 100%;
  background-color: $doger-blue;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
</style>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: String,
      required: true,
      default: 0
    }
  },
  data: function() {
    let progress = this.$props.progress;
    let styles = {
      width: progress + "%"
    };
    if (Number(progress) > 90) {
      styles["border-bottom-right-radius"] = "20px";
      styles["border-top-right-radius"] = "20px";
    }

    return {
      dynamicStyle: styles
    };
  }
};
</script>


