import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/login.vue';
import Admin from '../views/admin.vue';
import Researcher from '../views/researcher.vue';

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
  {
    path: '/researcher',
    name: 'researcher',
    component: Researcher
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
