<template>
    <header>
        <div class="logo"><img src="/dist/img/logo.svg"></div>
        <nav></nav>
    </header>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';
    header {
        display: flex;
        flex-direction: row;
        .logo {
            flex-grow: 0;
            @include media($small) {
                display: none;
            }
        }
        nav {
            flex-grow: 1;
            flex-wrap: wrap;
        }
    }
</style>

<script>
    export default {
        name: 'newNav'
    }
</script>