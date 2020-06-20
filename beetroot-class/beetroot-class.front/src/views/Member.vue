<template>
  <div v-if="isEmpty" class="member__empty">Member not found</div>
  <main v-else class="member">
    <header class="member__header">
      <h2 class="member__name">{{member.name}}</h2>
      <img v-if="!!member.image" class="member__photo" :src="member.image" alt />
    </header>
    <icon-beetroot-academy class="member__icon" />
    <form v-if="isMyAuthAccount" class="member__form" @submit.prevent="onSubmit">
      <input class="member__input" v-model="name" placeholder="Project Name" type="text" />
      <input class="member__input" v-model="link" placeholder="Link" type="text" />
      <input class="member__input" v-model="image" placeholder="Link to image" type="text" />
      <b-button class="member__button">Add Project</b-button>
    </form>
    <ul class="member__projects">
      <li class="member__project" v-for="project in member.projects" :key="project.link">
        <member-project :project="project" />
      </li>
    </ul>
  </main>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import MemberProject from "../components/common/MemberProject";
import IconBeetrootAcademy from "../components/icons/IconBeetrootAcademy";
import { PROJECT_ADD } from "../store";

export default {
  name: "Member",
  components: {
    MemberProject,
    IconBeetrootAcademy
  },
  data() {
    return {
      name: "",
      link: "",
      image: ""
    };
  },
  methods: {
    ...mapActions([PROJECT_ADD]),
    onSubmit() {
      const { name, link, image } = this;
      this[PROJECT_ADD]({
        id: this.$route?.params?.id,
        project: { name, link, image }
      });
    }
  },
  computed: {
    ...mapState(["loading", "user"]),
    ...mapGetters(["getMemberById", "isAuth"]),
    isMyAuthAccount() {
      return this.isAuth && this.$route.params.id === this.user.username;
    },
    member() {
      return this.getMemberById(this.$route.params.id);
    },
    isEmpty() {
      return !this.loading && !this.member.id;
    }
  }
};
</script>
<style lang="scss">
.member {
  @include flex(flex-start, stretch, column);
  &__header {
    padding: 40px 24px 0;
    @include flex(flex-start, center, column);
  }
  &__photo {
    width: 400px;
    height: 400px;
    object-fit: contain;
    margin-bottom: 40px;
  }
  &__name {
    @include text($H300, 700);
    margin-bottom: 24px;
  }
  &__form {
    align-self: center;
    @include flex(flex-start, center, column);
    width: 100%;
    margin-bottom: 40px;
    @include media() {
      width: 600px;
    }
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
  &__icon {
    align-self: center;
    width: 200px;
    margin-bottom: 40px;
  }
}
</style>