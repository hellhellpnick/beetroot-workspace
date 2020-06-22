<template>
  <div class="login-popover">
    <form @submit.prevent="onSubmit" class="login-popover__form">
      <input
        v-model="username"
        autocomplete="new-password"
        class="login-popover__input"
        placeholder="Username"
        type="text"
      />
      <input
        v-model="password"
        autocomplete="new-password"
        class="login-popover__input"
        placeholder="Password"
        type="password"
      />

      <b-button class="login-popover__button">{{authLoading ? 'loading...': 'Log In'}}</b-button>
      <b-button @click="$emit('cancel')" type='secondary'>Cancel</b-button>
    </form>
    <p class="login-popover__error">{{error}}</p>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { AUTH_REQUEST } from "../../store";
export default {
  name: "LoginPopover",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["authLoading", "error"])
  },
  methods: {
    ...mapActions([AUTH_REQUEST]),
    onSubmit() {
      const { username, password } = this;
      this[AUTH_REQUEST]({ username, password });
    }
  }
};
</script>
<style lang="scss">
.login-popover {
  @include flex(flex-start, stretch, column);
  position: absolute;
  top: 80px;
  width: 100%;
  left: 0;
  right: 0;
  background-color: $beetroot-light;
  padding: 24px;
  @include media($screen-tablet) {
    @include flex();
    position: static;
    width: auto;
    padding: 0;
  }
  &__form {
    @include flex(flex-start, stretch, column);
    flex-wrap: wrap;
    margin-bottom: 4px;
    position: relative;
    @include media($screen-tablet) {
      @include flex();
    }
  }
  &__error {
    position: absolute;
    @include text($H10, 400, $R400);
    bottom: 7px;
  }
  &__input {
    min-height: 30px;
    margin-bottom: 12px;
    border-radius: 3px;
    outline: none;
    border: none;
    padding: 0 12px;
    font-size: 16px;
    @include media($screen-tablet) {
      margin-right: 12px;
      margin-bottom: 0;
    }
  }
  &__button {
    margin-bottom: 12px;
    @include media($screen-tablet) {
      margin-right: 12px;
      margin-bottom: 0;
    }
  }
}
</style>