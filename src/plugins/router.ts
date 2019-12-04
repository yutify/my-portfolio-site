import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/whoami',
    name: 'whoami',
    component: () => import('../views/WhoAmI.vue'),
  },
  {
    path: '/worked_at',
    name: 'workedAt',
    component: () => import('../views/WorkedAt.vue'),
  },
  {
    path: '/related_service',
    name: 'relatedService',
    component: () => import('../views/RelatedService.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
