import Vue from 'vue';
import VueResource from 'vue-resource';
import VueAnalytics from 'vue-analytics'
import firebase from 'firebase';
import moment from 'moment';
moment.locale('ru');
import store from './store';
import './styles/index.scss';
import '../libs/flexboxgrid/dist/flexboxgrid.min.css';

/**
 * Pages
 */
import router from './routes';

Vue.use(VueResource);
Vue.use(VueAnalytics, {
    id: 'UA-102913097-1',
    router
});

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
    `,
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    beforeCreate() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyA_PHvJhoRo9fCsdbk7iOkPQ1DgUqP1-qU",
            authDomain: "pepper-eccfe.firebaseapp.com",
            databaseURL: "https://pepper-eccfe.firebaseio.com",
            projectId: "pepper-eccfe",
            storageBucket: "gs://pepper-eccfe.appspot.com",
            messagingSenderId: "83351937503"
        };

        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                store.commit('login', user);
            } else {
                store.commit('login', false);
            }
        });
    }
});

