<template>
  <div id="app" class="app">
    <app-header />
    <app-form @add-todo="onAddTodo" />
    <app-list @remove="onTodoRemove" @done="onTodoDone" :todos="todos" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppForm from "./components/AppForm";
import AppList from "./components/AppList";

export default {
  name: "App",
  components: {
    AppHeader,
    AppForm,
    AppList
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    onAddTodo(todo) {
      this.todos.push(todo);
    },
    onTodoRemove(id) {
      const idx = this.todos.findIndex(item => item?.id === id);
      if (idx >= 0) this.todos.splice(idx, 1);
    },
    onTodoDone(id) {
      const { todos } = this;
      const idx = todos.findIndex(item => item?.id === id);
      if (idx >= 0) {
        todos.splice(idx, 1, { ...todos[idx], done: true });
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
