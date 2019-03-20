<template>
  <td class="dropdown-container">
    <div class="dropdown-selected" :class="selected.styling" v-on:click="expandDropdown">
      <p>{{selected.name}}</p>
      <ul v-if="isExpanded" class="dropdown-list">
        <li
          v-for="(option,index) in options"
          :key="index"
          class="dropdown-item"
          :class="option.styling"
          v-on:click="selectItem(option.value)"
        >{{option.name}}</li>
      </ul>
    </div>
  </td>
</template>


<script>
import { store } from "../../store.js";
export default {
  name: "BaseDropdown",
  props: {
    options: {
      type: Array,
      required: true
    },
    taskID: {
      type: String
    },
    owner: {
      type: String
    },
    field: {
      type: String
    },
    task: {
      type: Object
    },
    handleChange: {
      type: Function
    }
  },
  data: function() {
    return {
      isExpanded: false
    };
  },
  computed: {
    dropdownItems: function() {
      let items = this.$props.options;
      //return items.filter(el => el.value !== this.$data._selected.value);
    },
    selected: function() {
      const { task, field, options } = this.$props;

      return options.filter(option => option.value === task[field])[0];
    }
  },
  methods: {
    expandDropdown: function() {
      this.$data.isExpanded === true
        ? (this.$data.isExpanded = false)
        : (this.$data.isExpanded = true);
    },
    selectItem: function(value) {
      const { field, taskID, owner } = this.$props;
      store.commit("editTask", {
        field,
        owner,
        taskID,
        value
      });
    }
  }
};
</script>

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
.fresh-status-label {
  background-color: $doger-blue;
}
.progress-status-label {
  background-color: $purple-heart;
}
.done-status-label {
  background-color: $caribbean-green;
}
.low-priority-label {
  background-color: $supernova;
}
.medium-priority-label {
  background-color: $web-orange;
}
.high-priority-label {
  background-color: $radical-red;
}
</style>
