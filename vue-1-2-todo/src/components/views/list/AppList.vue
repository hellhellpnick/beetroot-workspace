<template>
  <transition-group name="list-flip" tag="ol" class="list">
    <app-todo-item
      v-for="(item, idx) in todos"
      :key="item.id"
      class="list-flip-item"
      :idx="idx"
      :todo="item"
      @done="onTodoDone"
      @remove="onTodoRemove"
      @select="onSelect"
    />
  </transition-group>
</template>

<script>
import AppTodoItem from "./AppTodoItem";

export default {
  name: "AppList",
  components: {
    AppTodoItem
  },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    onTodoDone(id) {
      this.$emit("done", id);
    },
    onTodoRemove(id) {
      this.$emit("remove", id);
    },
    onSelect(id) {
      this.$emit("select", id);
    }
  }
};
</script>

<style lang="scss">
.list {
  list-style-position: inside;
  padding: 24px;
  list-style: none;
}
.list-flip-item {
  transition: all 0.2s;
  display: inline-flex;
  margin-right: 10px;
}
.list-flip-enter,
.list-flip-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-flip-leave-active {
  position: absolute;
}
</style>
