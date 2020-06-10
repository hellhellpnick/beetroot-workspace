<template>
  <div id="app" class="app">
    <app-header />
    <transition name="fade" mode="out-in">
      <section class="app__todo" v-if="!!selectedTodo">
        <a href="#" @click="onBack">Back</a>
        <h2>{{ getSelectedTodo.text }}</h2>
        <p>Status: {{ getSelectedTodo.done ? "Done": 'To do' }}</p>
      </section>
      <main v-else>
        <app-form @add-todo="onAddTodo" />
        <app-filters :filter="filter" v-model="filter" />
        <app-list
          @select="onSelect"
          @remove="onTodoRemove"
          @done="toggleTodoDone"
          :todos="getTodos"
        />
      </main>
    </transition>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppForm from "./components/views/list/AppForm";
import AppList from "./components/views/list/AppList";
import AppFilters from "./components/views/list/AppFilters";

export default {
  name: "App",
  components: {
    AppHeader,
    AppForm,
    AppList,
    AppFilters
  },
  data() {
    return {
      todos: [],
      filter: "all",
      selectedTodo: null
    };
  },
  methods: {
    onBack() {
      this.selectedTodo = null;
    },
    onAddTodo(todo) {
      this.todos.push(todo);
    },
    onTodoRemove(id) {
      const idx = this.todos.findIndex(item => String(item?.id) === String(id));
      if (idx >= 0) this.todos.splice(idx, 1);
    },
    toggleTodoDone(id) {
      const { todos } = this;
      const idx = todos.findIndex(item => String(item?.id) === String(id));
      if (idx >= 0) {
        todos.splice(idx, 1, { ...todos[idx], done: !todos[idx]?.done });
      }
    },
    onSelect(id) {
      this.selectedTodo = String(id);
    },
    loadState() {
      const todos = this.$appStorage.get("todos") || [];
      this.todos = [...todos];
    },
    checkTodoFromURL() {
      const { 1: id = null } = window.location.href.split("#");
      this.selectedTodo = id;
    }
  },
  computed: {
    getTodos() {
      const { todos, filter } = this;
      switch (filter) {
        default:
          return todos;
        case "done":
          return todos.filter(({ done }) => done);
        case "todo":
          return todos.filter(({ done }) => !done);
      }
    },
    getSelectedTodo() {
      return this.todos.find(({ id }) => String(id) === this.selectedTodo) || {};
    }
  },
  watch: {
    todos(todos) {
      this.$appStorage.save("todos", todos);
    }
  },
  created() {
    this.loadState();
    this.checkTodoFromURL();
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
  &__todo {
    padding: 24px;
    background-color: #ffab00;
    color: white;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
