 import Vue from 'vue'
 import Router from 'vue-router'
 const Home = () => import('../views/Home.vue');


 Vue.use(Router)
 
 const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 ];
 
 export const router = new Router({
  mode: 'history',
  routes,
 });

export default router
