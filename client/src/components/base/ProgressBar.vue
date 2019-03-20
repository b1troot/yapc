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
.extraBorder {
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
}
</style>

<script>
export default {
  name: "ProgressBar",
  props: {
    fill: {
      type: Number,
      required: true,
      default: 0
    }
  },

  computed: {
    dynamicStyle: function() {
      return this.$props.fill > 90
        ? {
            "border-bottom-right-radius": "20px",
            "border-top-right-radius": "20px",
            width: `${this.$props.fill}%`
          }
        : {
            width: `${this.$props.fill}%`
          };
    }
  }
};
</script>


