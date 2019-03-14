<template>
  <td class="dropdown-container">
    <div
      class="dropdown-selected"
      :class="$data._selected.etiquette"
      v-on:click="expandDropdown"
    >{{$data._selected.label}}</div>

    <ul v-if="isExpanded" class="dropdown-list">
      <li
        class="dropdown-item"
        v-for="(item) in dropdownItems"
        :key="item.id"
        :class="item.etiquette"
        v-on:click="selectItem(item.id)"
      >
        <p>{{ item.label }}</p>
      </li>
    </ul>
  </td>
</template>

<style lang="scss">
@import "../../styles/main.scss";
.dropdown-container {
  width: 100%;
  height: 100%;
  position: relative;
  color: $main-bright-color;
}
.dropdown-selected {
  @include flex-center;
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
  @include flex-center;
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
export default {
  name: "BaseDropdown",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Object,
      required: true
    },
    handleChange: {
      type: Function
    }
  },
  data: function() {
    console.log(this.$props.selected);
    return {
      isExpanded: false,
      _selected: this.$props.selected
    };
  },
  computed: {
    dropdownItems: function() {
      let items = this.$props.items;
      return items.filter(el => el.id !== this.$data._selected.id);
    }
  },
  methods: {
    expandDropdown: function() {
      this.$data.isExpanded === true
        ? (this.$data.isExpanded = false)
        : (this.$data.isExpanded = true);
    },
    selectItem: function(index) {
      this.$data._selected = this.dropdownItems.filter(
        item => item.id === index
      )[0];
      this.expandDropdown();
      this.$props.handleChange(this.$data._selected);
    }
  }
};
</script>

