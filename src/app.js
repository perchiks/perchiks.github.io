import Vue from 'vue';
import VueResource from 'vue-resource';
import firebase from 'firebase';

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
            <pre>{{user}}</pre>
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
    }
});

