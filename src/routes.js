import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
Vue.use(VueRouter);

/**
 * Pages
 */
import IndexPage from './pages/IndexPage.vue';

/**
 * Controllers
 */


/**
 * Routes configuration
 */
const routes = [
    { path: '/', component: IndexPage },
    { path: '*', redirect: '/404' }
];

/**
 * @instanceOf VueRouter
 * @type {VueRouter}
 */
const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;