import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/login.vue';
import Admin from '../views/admin.vue';

const routes = [
{
    path: '/',
    name: 'Login',
    component: Login
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
