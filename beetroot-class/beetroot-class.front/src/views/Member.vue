<template>
  <div v-if="isEmpty" class="member__empty">Member not found</div>
  <main v-else class="member">
    <header class="member__header">
      <h2 class="member__name">{{member.name}}</h2>
      <img v-if="!!member.image" class="member__photo" :src="member.image" alt />
    </header>
    <icon-beetroot-academy class="member__icon" />
    <member-form v-if="isMyAuthAccount" class="member__form" />
    <ul class="member__projects">
      <li class="member__project" v-for="project in member.projects" :key="project.id">
        <member-project :project="project" />
      </li>
    </ul>
  </main>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import MemberProject from "../components/common/MemberProject";
import MemberForm from "../components/common/MemberForm";
import IconBeetrootAcademy from "../components/icons/IconBeetrootAcademy";

export default {
  name: "Member",
  components: {
    MemberProject,
    IconBeetrootAcademy,
    MemberForm
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
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 40px;
    @include media($screen-tablet-small) {
      width: 400px;
      object-fit: contain;
    }
  }
  &__name {
    @include text($H300, 700);
    margin-bottom: 24px;
  }
  &__form {
    align-self: center;
    margin-bottom: 40px;
  }
  &__icon {
    align-self: center;
    width: 200px;
    margin-bottom: 40px;
  }
}
</style>