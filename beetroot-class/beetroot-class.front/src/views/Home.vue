<template>
  <div class="home">
    <div class="home__list">
      <router-link
        :to="`/${member.id}`"
        class="home__card"
        v-for="member in members"
        :key="member.id"
      >
        <member-card :member="member" />
      </router-link>
    </div>
  </div>
</template>

<script>
import MemberCard from "@/components/common/MemberCard";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    MemberCard
  },
  computed: {
    ...mapState(["members"])
  },
};
</script>
<style lang="scss">
.home {
  padding: 40px 24px;
  &__list {
    @include flex(center);
    flex-wrap: wrap;
  }
  &__card {
    margin: 0 24px 32px;
  }
}
</style>
