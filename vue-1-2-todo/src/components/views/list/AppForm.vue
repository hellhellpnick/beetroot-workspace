<template>
  <form class="form" @submit.prevent="onAddTodo">
    <input class="form__input" type="text" v-model.trim="todo" />
    <app-button class="form__button">ADD TODO</app-button>
  </form>
</template>
<script>
export default {
  name: "AppForm",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    onAddTodo() {
      const { todo } = this;
      if (todo) {
        const data = {
          id: Date.now(),
          text: todo,
          done: false
        };
        this.$emit("add-todo", data);
        this.todo = "";
      } else {
        alert('Todo text is empty!');
      }
    },
    loadState() {
      const data = this.$appStorage.get("todo") || "";
      this.todo = data;
    }
  },
  watch: {
    todo(todo) {
      this.$appStorage.save("todo", todo);
    }
  },
  created() {
    this.loadState();
  }
};
</script>

<style lang="scss">
$main-color: #6554c0;
.form {
  background-color: $main-color;
  padding: 24px;
  display: flex;

  &__input {
    border-radius: 4px;
    border: 1px solid $main-color;
    flex: 1 1;
    min-height: 32px;
    margin-right: 24px;
    outline: none;
    padding: 0 12px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>