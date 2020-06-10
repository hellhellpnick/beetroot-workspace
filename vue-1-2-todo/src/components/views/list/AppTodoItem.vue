<template>
  <li class="todo-item">
    <div class="todo-item__row">
      <span class="todo-item__idx">{{ idx + 1 }}</span>
      <a class="todo-item__name" :href="`#${todo.id}`" @click="onSelect">{{ todo.text }}</a>
      <span class="todo-item__status" :style="{ backgroundColor: getStatusColor }">{{ getStatus }}</span>
    </div>
    <div class="todo-item__buttons">
      <app-button @click="onTodoRemove" size="small" type="danger" class="todo-item__action">Remove</app-button>
      <app-button
        @click="onTodoDone"
        size="small"
        :type="todo.done ? 'warning' : 'success'"
        class="todo-item__action"
      >{{ getActionName }}</app-button>
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
    },
    getActionName() {
      return this?.todo?.done ? "Todo" : "Done";
    }
  },
  methods: {
    onTodoDone() {
      this.$emit("done", this.todo?.id);
    },
    onTodoRemove() {
      this.$emit("remove", this.todo?.id);
    },
    onSelect() {
      this.$emit("select", this.todo?.id);
    }
  }
};
</script>

<style lang="scss">
.todo-item {
  width: 100%;
  display: inline-flex;
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