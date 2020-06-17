<template>
  <nav class="navbar">
    <div class="container navbar__container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h1 class="title">App 3</h1>
        </a>
        <button
          @click="toggleMenu"
          class="navbar-burger burger has-background-info"
          data-target="navbarMenuHeroB"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeInDown animate__faster"
        leave-active-class="animate__animated animate__fadeOutUp animate__faster"
        mode="out-in"
      >
        <div v-show="visible" class="navbar-menu__wrapper">
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <router-link to="/" exact class="navbar-item">Home</router-link>
              <router-link to="/about" class="navbar-item">About</router-link>
              <router-link :to="{name: 'Contact'}" class="navbar-item">Contact</router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggleMenu() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss">
.navbar-menu {
  display: block !important;
  &__wrapper {
    @media screen and (min-width: 1024px) {
      display: flex !important;
    }
  }
}
.navbar {
  &__container {
    display: flex;
    justify-content: space-between;
  }
}
.navbar-brand {
  position: relative;
  z-index: 2;
}
.burger {
  border: none;
  outline: none;
}
</style>