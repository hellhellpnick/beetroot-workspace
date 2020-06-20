import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Member from '../views/Member.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: Home,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'Member',
    component: Member,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
