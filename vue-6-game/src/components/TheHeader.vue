<template>
  <header class="header">
    <h1 class="header__title">Tic Tac Toe</h1>
    <div class="header__row">
      <icon-merge class="header__icon" />
      <icon-beetroot-academy class="header__icon" />
    </div>
  </header>
</template>
<script>
import IconMerge from "./icons/IconMerge";
import IconBeetrootAcademy from "./icons/IconBeetrootAcademy";

export default {
  name: 'TheHeader',
  components: {
    IconMerge,
    IconBeetrootAcademy
  }
}
</script>
<style lang="scss">
@import '~@/scss/vars';
.header {
  &__title {
    margin-bottom: 18px;
    color: $main-color;
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__icon {
    width: auto;
    height: 32px;
    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }
}
</style>