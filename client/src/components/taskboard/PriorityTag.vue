<template>
  <base-dropdown
    class="base-dropdown"
    :items="priorities"
    :selected="currentPriority"
    :handleChange="changePriority"
  />
</template>

<style scoped lang="scss">
@import "../../styles/main.scss";
</style>

<script>
import BaseDropdown from "../base/BaseDropdown.vue";
export default {
  name: "PriorityTag",
  components: { BaseDropdown },

  props: {
    priorities: {
      type: Array,
      required: true
    },
    currentPriority: {
      type: Object,
      required: true
    }
  },
  methods: {
    changePriority: function(data) {
      this.$emit("priority", data.label);
    }
  }
};
</script>
