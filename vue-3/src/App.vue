<template>
  <div id="app" class="app">
    <section class="hero is-info is-large">
      <div class="hero-head">
        <the-navigation />
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <transition
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
            mode='out-in'
          >
            <router-view />
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TheNavigation from "./components/TheNavigation";

export default {
  name: "App",
  components: {
    TheNavigation
  }
};
</script>
<style lang="scss">
.app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.hero {
  min-height: 100vh;
}
</style>
