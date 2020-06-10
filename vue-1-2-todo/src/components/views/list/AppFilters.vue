<template>
  <div class="filters">
    <app-filter val='all' v-model='filterModel'>All</app-filter>
    <app-filter val='done' v-model='filterModel'>Done</app-filter>
    <app-filter val='todo' v-model='filterModel'>Todo</app-filter>
  </div>
</template>

<script>
import AppFilter from './AppFilter';

export default {
  name: 'AppFilters',
  props: {
    filter: String,
  },
  components: {
    AppFilter,
  },
  computed: {
    filterModel: {
      get() {
        return this.filter;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>

<style lang="scss">
$style: filters;
.#{$style} {
  padding: 24px;
  background-color: #00b8d9;
  &__label {
    cursor: pointer;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    &:not(:last-child) {
      margin-right: 24px;
    }
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
