<template>
  <a class="project" :href="project.link" target="_blank">
    <img class="project__image" :src="project.image" alt />
    <h3 class="project__name">{{project.name}}</h3>
  </a>
</template>
<script>
export default {
  name: "MemberProject",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss">
$style: project;
.#{$style} {
  width: 100%;
  height: 400px;
  position: relative;
  @include flex(flex-start);
  padding: 24px;
  background-color: rgba(black, 0.4);
  @include transition(all);
  @include media {
    &:hover {
      background-color: transparent;
      .#{$style}__name {
        font-size: 22px;
      }
    }
  }
  &__image {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    @include position();
    object-fit: cover;
  }
  &__name {
    @include transition(all);
    @include text(32px, 400, $N0);
  }
}
</style>