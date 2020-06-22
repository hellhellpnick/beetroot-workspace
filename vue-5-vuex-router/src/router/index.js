import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Posts from '@/views/Posts';
import About from '@/views/About';
import Post from '@/views/Post';
import PostDetails from '@/views/PostDetails';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts',
    component: Posts,
    children: [
      {
        path: ':pid',
        name: 'Post',
        component: Post
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:id',
    name: 'PostDetails',
    component: PostDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
