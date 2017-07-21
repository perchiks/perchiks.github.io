import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import VueCookie from 'vue-cookie';
import Fingerprint2 from 'fingerprintjs2';
Vue.use(VueRouter);
Vue.use(VueCookie);

/**
 * Pages
 */
import IndexPage from './pages/IndexPage.vue';
import OrderPage from './pages/OrderPage.vue';


/**
 * Controllers
 */


/**
 * Routes configuration
 */
const routes = [
    { path: '/', component: IndexPage },
    { path: '/order', component: OrderPage},
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

router.beforeEach((to, from, next) => {
    if (Vue.cookie.get('pper_id')) {
        let visits = Vue.cookie.get('views') || 0;
        visits = parseInt(visits) + 1;
        Vue.cookie.set('views', visits.toString(), {expires: '1Y'});
        store.commit('uid', Vue.cookie.get('pper_id'));
    } else {
        new Fingerprint2().get(function(result, components){
            Vue.cookie.set('pper_id', result, {expires: '1M'});
            store.commit('uid', result);
        });
    }
    if(to.query.hasOwnProperty('utm_source')) {
        Vue.cookie.set('utm_data', JSON.stringify(to.query), { expires: '1D' });
        store.commit('utm', to.query);
    }
    next();
});

export default router;