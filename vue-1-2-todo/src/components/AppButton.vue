<template>
  <button @click="() => $emit('click')" class="button" :class="[size, type]">
    <slot />
  </button>
</template>
<script>
export default {
  name: "AppButton",
  props: {
    size: {
      type: String,
      default: "medium"
    },
    type: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style lang="scss">
$style: button;
.#{$style} {
  background-color: #172b4d;
  padding: 6px 32px;
  min-height: 32px;
  border-radius: 4px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &.small {
    padding: 6px 12px;
    min-height: auto;
  }
  &.danger {
    background-color: #ff5630;
  }
  &.success {
    background-color: #36b37e;
  }
}
</style>