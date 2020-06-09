<template>
  <ol class="list">
    <app-todo-item
      v-for="(item, idx) in todos"
      :key="item.id"
      :idx="idx"
      :todo="item"
      @done="onTodoDone"
      @remove="onTodoRemove"
    />
  </ol>
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
      this.$emit('done', id);
    },
    onTodoRemove(id) {
      this.$emit('remove', id);
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
</style>
