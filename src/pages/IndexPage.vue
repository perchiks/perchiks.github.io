<template>
    <container class="container" align="center center">
        <column size="4">
            <figure>
                <img src="/dist/img/logo.svg">
                <figcaption><h1>Скоро здесь будет горячо</h1></figcaption>
            </figure>
        </column>
    </container>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    .container {
        height: 100%;
    }
    figure {
        img {
            width: 100%;
            height: auto;
        }
    }
    h1 {
        color: $primary;
        text-align: center;
    }
</style>

<script>
    import {Container, Column} from '../components/grid';
    export default {
        name: 'IndexPage',
        children: {
            container: Container,
            column: Column
        }
    }
</script>