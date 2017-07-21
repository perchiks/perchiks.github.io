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
import PageNotFound from './pages/404.vue';


/**
 * Controllers
 */


/**
 * Routes configuration
 */
const routes = [
    { path: '/', component: IndexPage},
    { path: '/order', component: OrderPage, props: { title: 'Сделать заказ' }},
    { path: '/404', component: PageNotFound, props: {title: 'Страница не найдена'}},
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
    Vue.$ga.set('userId', store.state.user.uid);
    if(to.query.hasOwnProperty('utm_source')) {
        Vue.cookie.set('utm_data', JSON.stringify(to.query), { expires: '1D' });
        store.commit('utm', to.query);
    }
    if(to.query.hasOwnProperty('fp')) {
        store.commit('fp');
        console.log('fp');
    }
    next();

});
router.afterEach((to, from, next) => {
    window.yaCounter45386919.hit(to.path, {title: document.title, referer: from.path});
    window.yaCounter45386919.userParams({
        userData: store.state.user
    });
});

export default router;