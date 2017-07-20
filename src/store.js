import Vue from 'vue';
import Vuex from 'vuex';
import Fingerprint2 from 'fingerprintjs2';

Vue.use(Vuex);
/**
 * State Store
 * @type {Store}
 */
const store = new Vuex.Store({
    state: {
        user: {
            utm: 'direct',
            uid: ''
        }
    },
    mutations: {
        utm(state, value) {
            state.user.utm = value;
        },
        uid(state, value) {
            state.user.uid = value;
        }
    }
});

export default store;