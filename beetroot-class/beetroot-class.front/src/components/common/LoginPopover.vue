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

      <b-button>{{authLoading ? 'loading...': 'Log In'}}</b-button>
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
  &__form {
    @include flex();
    margin-bottom: 4px;
    position: relative;
  }
  &__error {
    position: absolute;
    @include text($H10, 400, $R400);
    bottom: 7px;
  }
  &__input {
    margin-right: 12px;
    border-radius: 3px;
    outline: none;
    border: none;
    padding: 0 12px;
    font-size: 16px;
  }
}
</style>