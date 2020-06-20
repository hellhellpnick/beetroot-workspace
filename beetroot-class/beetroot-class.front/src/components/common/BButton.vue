<template>
  <button @click="$emit('click')" class="button">
    <slot />
  </button>
</template>
<script>
export default {
  name: "BButton"
};
</script>
<style lang="scss">
$style: button;
.#{$style} {
  outline: none;
  border: none;
  @include flex(center, center);
  padding: 6px 32px;
  background-color: $beetroot-dark;
  @include text($H40, 400, $N0);
  border-radius: 3px;
  cursor: pointer;
  @include transition(all);
  @include media {
    &:hover {
      background-color: lighten($beetroot-dark, 5%);
    }
  }
  &:active {
    background-color: darken($beetroot-dark, 5%);
  }
}
</style>