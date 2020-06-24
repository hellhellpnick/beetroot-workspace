<template>
  <button @click="$emit('click')" class="button"><slot /></button>
</template>
<script>
export default {
  name: 'TButton'
}
</script>
<style lang="scss">
@import '~@/scss/vars';

$style: button;
.#{$style} {
  padding: 6px 32px;
  background-color: $main-color;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: lighten($main-color, 5%);
  }
  &:active {
    background-color: darken($main-color, 5%);
  }
}
</style>