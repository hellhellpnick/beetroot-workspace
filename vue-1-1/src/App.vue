<template>
  <div id="app" class="app">
    <h1 class="app__title">{{ getLoadingState }}</h1>
    <p class="app__text">Email: {{ email }}</p>
    <p class="app__text">Password: {{ password }}</p>
    <input class="app__input" type="email" v-model='email'>
    <input class="app__input" type="password" v-model='password'>
    <app-button @click="send" class="app__button">Button 1</app-button>
    <app-button @click="toggleLoading" :loading="loading" class="app__button">Button 2</app-button>
  </div>
</template>

<script>
import AppButton from "@/components/common/AppButton.vue";

export default {
  name: "App",
  components: {
    AppButton
  },
  data() {
    return {
      loading: false,
      email: '',
      password: '',
    };
  },
  methods: {
    send() {
      alert(`Email: ${this.email}; Password: ${this.password}`);
    },
    toggleLoading() {
      this.loading = !this.loading;
    }
  },
  computed: {
    getLoadingState() {
      return this.loading ? 'Loading...' : 'Hello World!'
    }
  }
};
</script>

<style lang='scss'>
$style: app;
.#{$style} {
  padding: 40px;
  @include flex-col(flex-start, center);
  &__title {
    color: $dark-color;
  }
  &__text {
    margin: 12px 0;
  }
  &__input {
    margin-bottom: 24px;
  }
  &__button {
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
}
</style>
