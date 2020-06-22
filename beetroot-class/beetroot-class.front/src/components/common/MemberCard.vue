<template>
  <div class="member-card">
    <img class="member-card__image" :src="member.image" alt />
    <div class="member-card__wrapper">
      <h2 class="member-card__name">{{member.name}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "MemberCard",
  props: {
    member: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss">
@mixin shadow($a: 30px, $b: -5px, $d: rgba(0, 0, 0, 0.81)) {
  -webkit-box-shadow: 0px 6px 30px -5px $d;
  -moz-box-shadow: 0px 6px 30px -5px $d;
  box-shadow: 0px 6px 30px -5px $d;
}
.member-card {
  width: 100%;
  height: 320px;
  @include media($screen-tablet-small) {
    @include size(220px);
  }
  @include media($screen-tablet) {
    @include size(300px);
  }
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  @include flex(flex-end, stretch, column);
  @include shadow();
  @include transition(all);
  @include media {
    &:hover {
      transform: translateY(-4px);
      @include shadow(20px, -4px, rgba(0, 0, 0, 0.7));
    }
  }
  &:active {
    box-shadow: none;
  }
  &__image {
    z-index: -1;
    position: absolute;
    @include position();
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__wrapper {
    @include flex(flex-end, center, column);
    padding: 32px 24px 24px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    background: -o-linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    background: -moz-linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    background: -webkit-gradient(transparent, rgba(0, 0, 0, 0.8));
  }
  &__name {
    @include text($H220, 400, $N0);
  }
}
</style>