// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import goods from 'components/goods/goods.vue';
import App from './App';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';
Vue.config.productionTip = false;
import VueResource from 'vue-resource';
import Router from 'vue-router';
Vue.use(Router);
Vue.use(VueResource);
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];
const router = new Router({
  routes: routes,
  linkActiveClass: 'active'
});
/* eslint-disable  */ 
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
router.push('goods');
