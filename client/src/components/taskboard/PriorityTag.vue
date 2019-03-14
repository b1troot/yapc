<template>
  <base-dropdown dropdownClass="priorityTag" :items="priorities"/>
</template>
<style scoped>
.priorityTag {
  width: 15em;
}
</style>

<script>
import BaseDropdown from "../base/BaseDropdown.vue";
export default {
  name: "PriorityTag",
  components: { BaseDropdown },
  data: function() {
    return {
      priorities: []
    };
  },
  beforeMount: function() {
    this.priorities = require("./dummyData.js").priorities;
  }
};
</script>
