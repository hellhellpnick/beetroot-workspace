<template>
  <form class="form" @submit.prevent="onAddTodo">
    <input class="form__input" type="text" v-model='todo' />
    <app-button class="form__button">ADD TODO</app-button>
  </form>
</template>
<script>
export default {
  name: "AppForm",
  data() {
    return {
      todo: ''
    }
  },
  methods: {
    onAddTodo() {
      const todo = {
        id: Date.now(),
        text: this.todo,
        done: false
      };
      this.$emit('add-todo', todo);
      this.todo = '';
    }
  }
};
</script>

<style lang="scss">
$main-color: #6554C0;
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