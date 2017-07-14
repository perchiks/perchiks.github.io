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
            /**
             * 0 - guest
             * 2 - known guest
             * 1 - client
             * 9 - partner
             * 7 - manager
             * 7845 - admin
             */
            id: '',
            role: 1,
            token: window.localStorage.getItem('token'),
            profile: {
                firstName: 'John',
                lastName: 'Doe'
            },
            source: {
                utm_medium: '',
                utm_source: '',
                utm_campaign: '',
                utm_term: '',
                utm_content: ''
            },
            orders: [
                {
                    id: '142423',
                    stages: [
                        {
                            type: 1,
                            complete: true,
                            completeDate: '01.05.17',
                            dueDate: '03.05.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 2,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.06.17',
                            todo: {link: '/app/agent', text: 'Заполнить данные'}
                        },
                        {
                            type: 3,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.07.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 4,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.08.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 5,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.10.17',
                            todo: {link: '', text: ''}
                        }
                    ]
                },
                {
                    id: '232323',
                    stages: [
                        {
                            type: 1,
                            complete: true,
                            completeDate: '01.05.17',
                            dueDate: '03.05.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 2,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.06.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 3,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.07.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 4,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.08.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 5,
                            complete: false,
                            completeDate: '',
                            dueDate: '03.11.17',
                            todo: {link: '', text: ''}
                        }
                    ]
                },
                {
                    id: '234324',
                    stages: [
                        {
                            type: 1,
                            complete: true,
                            name: 'Оформление заказа',
                            completeDate: '01.05.17',
                            dueDate: '03.05.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 2,
                            complete: false,
                            name: 'Составление брифа',
                            completeDate: '',
                            dueDate: '03.06.17',
                            todo: {link: '/app/agent', text: 'Заполнить данные'}
                        },
                        {
                            type: 3,
                            complete: false,
                            name: 'Подписание документов',
                            completeDate: '',
                            dueDate: '03.07.17',
                            todo: {link: '', text: ''}
                        },
                        {
                            type: 4,
                            complete: false,
                            name: 'Выполнение работ',
                            completeDate: '',
                            dueDate: '03.08.17',
                            todo: {link: '', text: ''}
                        }
                    ]
                }
            ]
        }
    },
    actions: {
        checkSession(context) {
            let state = context.state;
            Vue.http.get('https://example.net/api.json').then(response => {
                commit('loadUser', response.data.data)
            });
        }
    },
    mutations: {
        loadUser(state) {

        },
        setUserSource(state, utm) {
            if (state.user.role === 0) {
                new Fingerprint2().get(function(result, components){
                    state.user.id = result;
                    state.user.role = 2;
                    /**
                     * @todo need to add ya metric
                     * @tutorial https://yandex.ru/blog/metrika/praktikum-parametry-posetiteley-peredacha-dannykh-onlayn
                     */
                });
            }
            state.user.source = utm;
        }
    }
});

export default store;