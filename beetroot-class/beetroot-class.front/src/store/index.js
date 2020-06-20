import Vue from 'vue';
import Vuex from 'vuex';
import {
  MEMBERS_REQUEST,
  MEMBERS_SET,
  MEMBERS_SUCCESS,
  AUTH_REQUEST,
  AUTH_SET,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
  PROJECT_ADD,
} from './types';
import { http } from '../services';
export * from './types';

Vue.use(Vuex);

const userState = {
  name: '',
  username: '',
  token: '',
};
const getUserFromStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : userState;
}

export default new Vuex.Store({
  state: {
    loading: false,
    members: [],
    user: { ...getUserFromStorage() },
    error: '',
  },
  mutations: {
    [MEMBERS_SET](state, payload) {
      state.members = [...payload];
    },
    [MEMBERS_SUCCESS](state) {
      state.loading = false;
    },
    [MEMBERS_REQUEST](state) {
      state.loading = true;
    },
    [AUTH_SET](state, payload) {
      state.user = { ...payload };
    },
    [AUTH_REQUEST](state) {
      state.error = '';
      state.loading = true;
    },
    [AUTH_SUCCESS](state) {
      state.error = '';
      state.loading = false;
    },
    [AUTH_FAILURE](state, payload) {
      state.error = payload;
      state.loading = false;
    },
    [AUTH_LOGOUT](state) {
      state.user = { ...userState };
    },
  },
  actions: {
    async [MEMBERS_REQUEST]({ commit }) {
      commit(MEMBERS_REQUEST);
      const members = await http.getMembers();
      if (members) {
        commit(MEMBERS_SET, members);
      }
      commit(MEMBERS_SUCCESS);
    },
    async [AUTH_REQUEST]({ commit }, payload) {
      commit(AUTH_REQUEST);
      try {
        const user = await http.login(payload);
        commit(AUTH_SET, user);
        localStorage.setItem('user', JSON.stringify(user));
        commit(AUTH_SUCCESS);
      } catch (err) {
        commit(AUTH_FAILURE, err?.response?.data?.error);
        localStorage.removeItem('user');
      }
    },
    async [PROJECT_ADD]({ dispatch, getters }, { id, project }) {
      const user = getters.getMemberById(id);
      const body = { projects: [...user.projects, project] };
      const res = await http.addProject({ id, body });
      if (res) {
        dispatch(MEMBERS_REQUEST);
      }
    },
    async [AUTH_LOGOUT]({ commit }) {
      commit(AUTH_LOGOUT);
      localStorage.removeItem('user');
    },
  },
  getters: {
    getMemberById: (state) => (id) => {
      console.log(id);
      return state.members.find((el) => el.id === id) || {};
    },
    isAuth: (state) => !!state?.user?.token,
  },
  modules: {},
});
