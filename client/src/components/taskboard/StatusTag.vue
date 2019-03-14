<template>
  <base-dropdown
    class="base-dropdown"
    dropdownClass="statusTag"
    :items="statuses"
    :selected="currentStatus"
    :handleChange="changeStatus"
  />
</template>
<style scoped lang="scss">
@import "../../styles/main.scss";
</style>

<script>
import BaseDropdown from "../base/BaseDropdown.vue";
export default {
  name: "StatusTag",
  components: { BaseDropdown },

  props: {
    statuses: {
      type: Array,
      required: true
    },
    currentStatus: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeStatus: function(data) {
      this.$emit("status", data.label);
    }
  }
};
</script>
