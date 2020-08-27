import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import CompositionApi from '../components/CompositionAPIComponent.vue';
import OptionApi from '../components/OptionsAPIComponent.vue';
import Method from '../components/Method.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/composition',
    name: 'Composition',
    component: CompositionApi,
  }{
    path: '/option',
    name: 'Option',
    component: OptionApi,
  },
  {
    path: '/method',
    name: 'Method',
    component: Method,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
