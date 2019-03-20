<template>
  <nav>
    <ul>
      <li>
        <i class="fas fa-clipboard"></i>
      </li>
      <li>
        <i class="fas fa-tasks"></i>
      </li>
      <li>
        <i class="far fa-calendar-alt"></i>
      </li>
      <li>
        <i class="far fa-chart-bar"></i>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../styles/main.scss";
nav {
  background-color: $main-dark-color;
  color: lighten($purple-heart, 15);
  grid-column: 1/2;

  & > ul {
    height: 50%;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 2em;
  }
}
</style>

<script>
export default {
  name: "LayoutSideNav"
};
</script>
