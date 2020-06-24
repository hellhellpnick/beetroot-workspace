<template>
  <button class="cell" @click="$emit('click')">
    <component v-if="value" class="cell__icon" :class="value" :is="value" />
  </button>
</template>
<script>
import IconCross from "@/components/icons/IconCross";
import IconZero from "@/components/icons/IconZero";

export default {
  name: "TCell",
  props: {
    value: {
      type: String,
      default: null
    }
  },
  components: {
    cross: IconCross,
    zero: IconZero
  }
};
</script>
<style lang="scss">
@import "~@/scss/vars";
$style: cell;
.#{$style} {
  outline: none;
  cursor: pointer;
  padding: 24px;
  border: 2px solid $main-color;
  background-color: $dark;
  &__icon {
    fill: $main-color;
    &.cross {
      fill: #ff5630;
    }
    &.zero {
      fill: #00b8d9;
    }
  }
}
</style>