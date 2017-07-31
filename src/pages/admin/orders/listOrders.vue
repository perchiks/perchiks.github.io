<template>
    <article>
        <navigation></navigation>
        <h1>Заказы</h1>
        <div class="wrapper">
            <div :class="{completed: order.completed}" class="order" v-for="order in orders" :key="order.id">
                <div class="details">
                    <div># {{ order.id }}</div>
                    <div>{{ date(order.date) }}</div>
                    <div>{{ order.fullName }}</div>
                </div>
                <div class="content"><div>{{ order.details }}</div></div>
                <div class="contacts"><div>{{ order.phone }}</div><div>{{ order.email }}</div></div>
                <div class="meta">
                    <div><a :href="order.file" v-if="order.file">Приложенные файлы</a></div>
                    <div>UID: {{ order.uid }}</div>
                    <div>UTM: {{ order.utm }}</div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import '../../../styles/_colors.scss';

    article {
        h1 {
            text-align: center;
        }
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            .order {
                width: 80%;
                border: 1px solid rgba($color-primary-1, .25);
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                padding: .5rem;
                padding-bottom: 0;
                margin-top: 1rem;
            }
            .content {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            .contacts {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
            }
            .meta {
                background: rgba($color-primary-1, .25);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                padding: 1rem 0;
                margin-left: -.5rem;
                margin-right: -.5rem;
                a {
                    cursor: pointer;
                }
            }
            .details {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                > div {
                    &:first-of-type {
                        margin-bottom: 1rem;
                        font-size: 1.25rem;
                        font-weight: bold;
                    }
                }
            }
            .completed {
                opacity: .5;
            }
        }
    }
</style>

<script>
    import firebase from 'firebase';
    import adminNavigation from '../../../components/admin/adminNavigation.vue';
    import requireAuth from '../../../mixins/requireAuth';
    import moment from 'moment';

    export default {
        name: 'listOrders',
        mixins: [requireAuth],
        components: {
            navigation: adminNavigation
        },
        data() {
            return {
                orders: []
            }
        },
        methods: {
            date(rf) {
                return moment(rf).format('DD.MM.YYYY');
            }
        },
        mounted() {
            let self = this;
            let dbRef = firebase.database().ref('orders');
            dbRef.on('value', function(snapshot) {
                self.orders = snapshot.val();
            });
        }
    }
</script>