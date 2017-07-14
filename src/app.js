import Vue from 'vue';
import VueResource from 'vue-resource';
//import '../public/assets/fonts/_fonts.scss';
import store from './store';
import './styles/index.scss';

/**
 * Pages
 */
import router from './routes';

Vue.use(VueResource);

/**
 * Main component
 * @type {Vue}
 */
const app = new Vue({
    router,
    store,
    el: '#app',
    template: `
        <main>
            <router-view></router-view>
        </main>
`
});