<template>
  <label class="filter">
    <input
      class="filter__input"
      type="radio"
      name="filters"
      :value="val"
      v-model="filter"
    />
    <span class="filter__name">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  name: "AppFilter",
  props: {
    value: String,
    val: String
  },
  computed: {
    filter: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', this.val);
      }
    }
  }
};
</script>

<style lang="scss">
$style: filter;
.#{$style} {
  cursor: pointer;
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  &:not(:last-child) {
    margin-right: 24px;
  }
  &__name {
    font-weight: 700;
    margin-right: 8px;
    color: white;
    transition: color 0.2s ease;
  }
  &__input {
    &:checked + .#{$style}__name {
      color: #172b4d;
    }
  }
}
</style>