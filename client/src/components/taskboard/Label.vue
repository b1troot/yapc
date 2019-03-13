<template>
  <div class="label-container" :class="labelClass">
    <div v-if="type === 'dropdown'" class="dropdown-container">
      <div
        class="dropdown-selected flex-center"
        :class="selected.etiquette"
        v-on:click="expandDropdown"
      >{{selected.label}}</div>

      <ul v-if="isExpanded" class="dropdown-list">
        <li
          class="dropdown-item flex-center"
          v-for="(item) in dropdownItems"
          :key="item.id"
          :class="item.etiquette"
          v-on:click="selectItem(item.id)"
        >
          <p>{{ item.label }}</p>
        </li>
      </ul>
    </div>
    <div class="normal-label" v-else>
      <p class="flex-center">{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
.label-container {
  color: aliceblue;
}
.dropdown-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.dropdown-selected {
  cursor: pointer;
  height: 100%;
}
.dropdown-list {
  position: absolute;
  top: 100%;
  width: 100%;
  height: auto;
  z-index: 2;
  overflow: hidden;
}
.dropdown-item {
  height: 3rem;
  width: 100%;
  cursor: pointer;
}

.normal-label,
.normal-label > p {
  width: 100%;
  height: 100%;
}
</style>

<script>
import "../../styles/layout.css";
export default {
  name: "Label",

  props: {
    labelClass: {
      type: String
    },
    items: {
      type: Array,
      default: () => []
    },
    type: {
      type: String
    },
    content: {
      type: String
    }
  },
  data: function() {
    return {
      isExpanded: false,
      selected: this.$props.type ? this.$props.items[0] : null
    };
  },
  computed: {
    dropdownItems: function() {
      let items = this.$props.items;
      return items.filter(el => el.id !== this.selected.id);
    }
  },
  methods: {
    expandDropdown: function() {
      this.$data.isExpanded === true
        ? (this.$data.isExpanded = false)
        : (this.$data.isExpanded = true);
    },
    selectItem: function(index) {
      console.log(index);
      this.$data.selected = this.dropdownItems.filter(
        item => item.id === index
      )[0];
      this.expandDropdown();
    }
  }
};
</script>

