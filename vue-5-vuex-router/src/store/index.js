import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false,
  },
  mutations: {
    postsSet(state, posts) {
      state.posts = [...posts];
    },
    postsRequest(state) {
      state.loading = true;
    },
    postsSuccess(state) {
      state.loading = false;
    },
  },
  actions: {
    async getPosts({ commit }) {
      commit('postsRequest');
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (res.ok) {
          const data = await res.json();
          commit('postsSet', data);
        }
      } catch {
        console.log('Something wrong!');
      } finally {
        commit('postsSuccess');
      }
    },
  },
  modules: {},
});
