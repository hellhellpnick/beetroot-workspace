<template>
  <li class="todo-item">
    <div class="todo-item__row">
      <span class="todo-item__idx">{{ idx + 1 }}</span>
      <span class="todo-item__name">{{ todo.text }}</span>
      <span class="todo-item__status" :style="{ backgroundColor: getStatusColor }">{{ getStatus }}</span>
    </div>
    <div class="todo-item__buttons">
      <app-button @click='onTodoRemove' size="small" type="danger" class="todo-item__action">Remove</app-button>
      <app-button @click='onTodoDone' size="small" type="success" class="todo-item__action">Done</app-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "AppTodoItem",
  props: {
    idx: {
      type: Number,
      required: true
    },
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    getStatus() {
      return this?.todo?.done ? "Done" : "To do";
    },
    getStatusColor() {
      return this?.todo?.done ? "#36B37E" : "#FFAB00";
    }
  },
  methods: {
    onTodoDone() {
      this.$emit('done', this.todo?.id);
    },
    onTodoRemove() {
      this.$emit('remove', this.todo?.id);
    }
  }
};
</script>

<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #000;
  &__row {
    flex: 1 1;
    display: flex;
    align-items: center;
  }
  &__idx {
    font-weight: 700;
    margin-right: 24px;
  }
  &__name {
    text-align: left;
    font-weight: 700;
    margin-right: 24px;
    flex: 0 0 40%;
  }
  &__status {
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    color: white;
  }
  &__buttons {
    display: flex;
  }
  &__action {
    padding: 2px 10px;
    cursor: pointer;
    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }
}
</style>