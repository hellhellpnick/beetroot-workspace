<template>
  <div id="app" class="app">
    <the-header />
    <transition
      enter-active-class="animate__animated d-02 animate__fadeIn"
      leave-active-class="animate__animated d-02 animate__fadeOut"
      mode="out-in"
    >
      <router-view class="app__view" />
    </transition>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import { MEMBERS_REQUEST } from "./store";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader
  },
  methods: {
    ...mapActions([MEMBERS_REQUEST])
  },
  created() {
    this[MEMBERS_REQUEST]();
  }
};
</script>

<style lang='scss'>
.app {
  min-height: 100vh;
  @include flex(flex-start, stretch, column);
  &__view {
    flex: 1 1;
  }
}
</style>
