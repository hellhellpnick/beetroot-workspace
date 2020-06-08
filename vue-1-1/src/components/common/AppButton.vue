<template>
  <button @click="() => $emit('click')" class="button" :class="{ _loading: loading }">
    <template v-if="loading">Loading...</template>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    loading: Boolean
  }
};
</script>

<style lang="scss">
$style: button;
.#{$style} {
  padding: 12px 32px;
  border-radius: 4px;
  background-color: $button-color;
  color: white;
  @include flex(center, center);
  cursor: pointer;
  @include transition(all);
  &:hover {
    background-color: lighten($button-color, 10%);
  }
  &:active {
    background-color: darken($button-color, 10%);
  }
  &._loading {
    background-color: blueviolet;
  }
}
</style>