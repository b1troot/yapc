<template>
  <!--<base-tag tagClass="taskname-tag" :content="name" v-on:click="changeName"/>-->
  <td class="taskname-tag" v-on:click="showEdit" v-on:keyup.enter="hideEdit">
    <input type="text" v-if="editMode" v-model="name">
    <p v-else>{{name}}</p>
  </td>
</template>

<style lang="scss" scoped>
@import "../../styles/main.scss";
.taskname-tag {
  color: $purple-heart;
  width: $long-tag-w;
  height: $base-tag-h;
  background-color: $athens-gray;
  border-left: 10px solid $purple-heart;
  cursor: pointer;
  @include flex-center;
  & > p {
    @include flex-center;
  }
  & > input {
    border: none;
    width: 100%;
    height: 100%;
  }
}
</style>


<script>
import BaseTag from "../base/BaseTag.vue";

export default {
  name: "NameTag",
  components: { BaseTag },
  data: function() {
    return {
      name: this.$props.taskname,
      editMode: false
    };
  },
  methods: {
    showEdit: function() {
      this.editMode = true;
    },
    hideEdit: function() {
      if (this.name.length === 0) {
        this.name = "new task";
      }
      this.editMode = false;
    },
    toggleEdit: function() {
      this.editMode === true ? (this.editMode = false) : (this.editMode = true);
    }
  },
  props: {
    taskname: {
      type: String,
      required: true,
      default: "new task"
    }
  }
};
</script>
