<template>
  <thead>
    <tr class="tr">
      <td v-for="(label,index) in labels" :key="index" :class="label.color">
        <p>{{label.name}}</p>
      </td>
    </tr>
  </thead>
</template>

<style lang="scss" scoped>
@import "../../styles/main.scss";
.tr {
  font-size: 15px;
  & > td > p {
    @include flex-center;
  }
}
.tr-label-name {
  color: $purple-heart;
}
.tr-label-generic {
  color: darken($silver, 20);
}
</style>


<script>
export default {
  name: "TableHeader",
  props: {
    labels: {
      type: Array,
      required: true
    }
  }
};
</script>

