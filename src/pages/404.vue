<template>
    <article>
        <navigation class="nav" :title="title"></navigation>
        <div>
            <h1>Такой страницы нет</h1>
            <router-link to="/" exact="exact">Перейдем на главную?</router-link>
        </div>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import "../styles/_colors.scss";
    article {
        //display: flex;
        //flex-direction: column;
        height: 100%;
        .nav {
            display: flex;
            align-self: flex-start;
            justify-self: flex-start;
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            //align-self: flex-start;
        }
        a {
            border: 1px solid $primary;
            padding: .5rem;
            border-radius: 4px;
            color: $primary;
            text-transform: uppercase;
            display: inline-flex;
            text-decoration: none;
        }
    }

</style>

<script>
    import Navigation from '../components/Navigation.vue';

    export default {
        name: 'PageNotFound',
        props: ['title'],
        components: {
            navigation: Navigation
        }
    }
</script>