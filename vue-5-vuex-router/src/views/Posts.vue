<template>
  <div class="posts">
    <h1 class="posts__title">Posts</h1>
    <pre v-if="$store.state.loading">Posts Updaing...</pre>
    <router-view class="posts__post"/>
    <ol v-if='!$store.state.loading' class="posts__list">
      <router-link
        :to="{name: 'Post', params: {pid: post.id}}"
        class="posts__item"
        v-for="post in  $store.state.posts"
        :key="post.id"
      >
        <h3>{{post.id}} - {{post.title}}</h3>
      </router-link>
    </ol>
  </div>
</template>

<script>
import postsJson from "../posts.json";

export default {
  name: "PostsPage",
  data() {
    return {
      postsJson
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>
<style>
.posts__title {
  margin-bottom: 32px;
}
.posts__item {
  margin-bottom: 24px;
  text-align: left;
}
.posts__post {
  margin-bottom: 32px;
}
</style>