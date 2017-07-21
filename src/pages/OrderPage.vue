<template>
    <article>
        <navigation :title="title"></navigation>
        <order></order>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import "../styles/_colors.scss";
    article {
        h1 {
            text-align: center;
            color: rgba($primary, .75);
        }
    }
</style>

<script>
    import order from '../components/order.vue';
    import Navigation from '../components/Navigation.vue';

    export default {
        name: 'OrderPage',
        props: ['title'],
        components: {
            order: order,
            navigation: Navigation
        }
    }
</script>