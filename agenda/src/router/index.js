import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import  'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import VueCompositionAPI from '@vue/composition-api'
// import 'ant-design-vue/dist/antd.css';
// import { Button } from 'ant-design-vue';

Vue.use(VueRouter);
// Vue.use(VueCompositionAPI)
// Vue.use(Button);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
