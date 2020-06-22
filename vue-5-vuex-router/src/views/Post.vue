<template>
  <router-link :to="`/${post.id}`">
    <article class="post">
      <template v-if="post.id">
        <h2 class="post__title">{{post.title}}</h2>
        <p class="post__text">{{post.body}}</p>
      </template>
      <pre v-else>Post not found</pre>
    </article>
  </router-link>
</template>
<script>
export default {
  name: "Post",
  computed: {
    post() {
      const { pid } = this.$route.params;
      const emptyState = {
        title: "",
        body: "",
        id: ""
      };
      if (pid) {
        return (
          this.$store.state.posts.find(
            ({ id }) => String(id) === String(pid)
          ) || emptyState
        );
      }
      return emptyState;
    }
  }
};
</script>
<style>
.post {
  padding: 24px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 32px;
}
.post__title {
  margin-bottom: 24px;
}
</style>