<template>
    <article>
        <h1>Order</h1>
        <order></order>
    </article>

</template>

<style lang="scss" scoped="scoped">

</style>

<script>
    import order from '../components/order.vue';

    export default {
        name: 'OrderPage',
        components: {
            order: order
        }
    }
</script>