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
            uid: '',
            fp: false,
            current: false
        }
    },
    mutations: {
        utm(state, value) {
            state.user.utm = value;
        },
        uid(state, value) {
            state.user.uid = value;
        },
        fp(state) {
            state.user.fp = true;
        },
        login(state, user) {
            state.user.current = user;
        }

    }
});

export default store;