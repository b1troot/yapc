<template>
  <div class="wrapper">
    <div class="link-container">
      <a class="projects-link" href="#">projects</a>
      <i class="fas fa-angle-right right-arrow"></i>
    </div>
    <div class="project-label">
      <p>project name</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/main.scss";
$font-large: 1.5em;
.wrapper {
  width: 100%;
  height: 5em;
  //background-color: yellow;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  background-color: $athens-gray;
  border-left: 20px solid $doger-blue;
}
.link-container {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  //background-color: aqua;
}
.projects-link {
  font-size: $font-large;
  text-decoration: none;
  color: darken($doger-blue, 20);
}
.right-arrow {
  font-size: $font-large * 1.1;
  color: darken($doger-blue, 20);
}
.project-label {
  @include flex-center;
  width: auto;
  height: 100%;
  //background-color: aquamarine;
  font-size: $font-large;
}
</style>


<script>
export default {
  name: "ProjectHeader"
};
</script>
