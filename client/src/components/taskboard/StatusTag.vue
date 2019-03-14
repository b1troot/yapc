<template>
  <base-dropdown dropdownClass="statusTag" :items="statuses"/>
</template>
<style scoped>
.statusTag {
  width: 15em;
}
</style>

<script>
import BaseDropdown from "../base/BaseDropdown.vue";
export default {
  name: "StatusTag",
  components: { BaseDropdown },
  data: function() {
    return {
      statuses: []
    };
  },
  beforeMount: function() {
    this.statuses = require("./dummyData.js").statuses;
  }
};
</script>
