<template>
  <header class="header">
    <router-link to="/">
      <h1 class="header__title">
        <icon-beetroot fill="white" class="header__icon" />
        <span class="header__title-text">Beetroot Class</span>
      </h1>
    </router-link>
    <div class="header__user" v-if="isAuth">
      <h3 class="header__username">{{user.name}}</h3>
      <b-button class="header__button" @click="logout">Log Out</b-button>
    </div>
    <login-popover
      @cancel="() => activeLogin = false"
      v-else-if="activeLogin && !isAuth"
      class="header__popover"
    />
    <b-button v-else class="header__button" @click="activeLogin = true">Log In</b-button>
  </header>
</template>
<script>
import IconBeetroot from "./icons/IconBeetroot";
import LoginPopover from "./common/LoginPopover";
import { mapGetters, mapState, mapActions } from "vuex";
import { AUTH_LOGOUT } from "../store";

export default {
  name: "TheHeader",
  data() {
    return {
      activeLogin: false
    };
  },
  components: {
    IconBeetroot,
    LoginPopover
  },
  methods: {
    ...mapActions({
      logout: AUTH_LOGOUT
    })
  },
  computed: {
    ...mapState(["error", "user"]),
    ...mapGetters(["isAuth"])
  }
};
</script>
<style lang="scss">
$style: header;
.#{$style} {
  height: 80px;
  @include flex(space-between, center);
  padding: 0 24px;
  background-color: $beetroot-light;
  position: relative;
  &__title {
    @include flex(flex-start, center);
    @include text($H300, 400, $N00);
  }
  &__title-text {
    display: none;
    @include media($screen-tablet) {
      display: inline-block;
    }
  }
  &__icon {
    height: 44px;
    width: auto;
    margin-right: 12px;
  }
  &__user {
    @include flex(flex-start, center);
  }
  &__username {
    @include text($H60, 400);
    margin-right: 12px;
    @include media($screen-tablet-small) {
      @include text($H200, 400);
    }
  }
}
</style>