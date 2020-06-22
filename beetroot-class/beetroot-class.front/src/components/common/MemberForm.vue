<template>
  <form class="member-form" @submit.prevent="onSubmit">
    <input class="member-form__input" v-model="name" placeholder="Project Name" type="text" />
    <input class="member-form__input" v-model="link" placeholder="Link" type="text" />
    <input class="member-form__input" v-model="image" placeholder="Link to image" type="text" />
    <b-button class="member-form__button">{{loading ? 'loading...' : 'Add Project'}}</b-button>
  </form>
</template>
<script>
import { mapActions } from "vuex";
import { PROJECT_ADD } from "../../store";
export default {
  name: "MemberForm",
  data() {
    return {
      name: "",
      link: "",
      image: "",
      loading: false
    };
  },
  methods: {
    ...mapActions([PROJECT_ADD]),
    async onSubmit() {
      const { name, link, image } = this;
      if (![!!name, !!link, !!image].includes(false)) {
        this.loading = true;
        await this[PROJECT_ADD]({
          id: this.$route?.params?.id,
          project: { id: String(Date.now()), name, link, image }
        });
        this.loading = false;
        this.name = "";
        this.link = "";
        this.image = "";
      }
    }
  }
};
</script>
<style lang="scss">
.member-form {
  @include flex(flex-start, center, column);
  width: 100%;
  padding: 0 24px;
  @include media() {
    width: 600px;
  }
  &__input {
    margin-bottom: 20px;
    width: 100%;
    min-height: 32px;
    padding: 0 12px;
    font-size: 16px;
    &:last-of-type {
      margin-bottom: 32px;
    }
  }
}
</style>