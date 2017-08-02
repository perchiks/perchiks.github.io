<template>
    <section class="row middle-xs between xs" v-show="!pushState">
        <div class="col-xs">
            <div class="box content">
                Включите push-нотификации для получения горячих новостей от Перчика. Никакого спама, обещаем.
            </div>
        </div>
        <div class="col-xs-2 col-md-1">
            <div class="box">
                <btn link="#" class="sp_notify_prompt" inverted="true" small="true" @click="pushEnabled()">Включить</btn>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    .row {
        background: rgba($color-primary-0, .75);
        color: white;
        margin-bottom: 1rem;
        box-shadow: 0px 1px 5px 0px rgba($color-primary-0, .35);
        padding-left: .5rem;
        padding-right: .5rem;
        .content {
            font-size: .75rem;
            font-weight: 100;
        }
    }
</style>

<script>
    import button from '../components/button.vue';

    export default {
        name: 'Push',
        components: {
            btn: button
        },
        computed: {
            pushState() {
                return window.localStorage.getItem('push') === '1';
            }
        },
        methods: {
            pushEnabled() {
                window.localStorage.setItem('push', '1');
            }
        }
    }
</script>