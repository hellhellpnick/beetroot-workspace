<template>
  <div v-if="!error">
    <h1>{{loading ? 'Loading...': post.title}}</h1>
    <p>{{post.body}}</p>
    <button @click="$router.go(-1)">Back</button>
  </div>
  <h1 v-else>{{error}}</h1>
</template>
<script>
export default {
  name: "PostDetails",
  data() {
    return {
      loading: false,
      post: {
        title: "",
        body: "",
        id: ""
      },
      error: ""
    };
  },
  created() {
    const { id } = this.$route.params;
    if (id) {
      this.loading = true;
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          this.error = "";
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response);
          }
        })
        .then(data => {
          console.log(data);
          this.post = { ...data };
        })
        .catch(error => {
          console.log(error);
          this.error = "Post not found";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>