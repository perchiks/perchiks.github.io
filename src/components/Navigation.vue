<template>
    <header>
        <div><router-link to="/" exact="exact"><img src="/dist/img/logo.svg"></router-link></div>
        <div><h1>{{title}}</h1></div>
    </header>
</template>

<style lang="scss" scoped="scoped">
    @import "../styles/_colors.scss";

    header {
        display: flex;
        flex: 1;
        flex-basis: 100%;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        div {
            display: inline-flex;
            &:last-of-type {
                flex-grow: 1;
                h1 {
                    text-align: center;
                    color: rgba($primary, .75);
                    margin: 0 auto;
                    margin-left: 34vw;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'Navigation',
        props: ['title']
    }
</script>