<template>
    <div class="container">
        <div class="column">
            <figure>
                <img src="/dist/img/logo.svg">
                <figcaption><h1>Скоро здесь будет горячо</h1></figcaption>
            </figure>
        </div>
    </div>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';
    .container {
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
        .column {
            display: flex;
            flex-direction: column;
            flex-basis: 100/12*4%;
            @include media($small) {
                flex-basis: 80%;
                h1 {
                    font-size: 4rem;
                }
            }
            @include media($medium) {
                flex-basis: 80%;
                h1 {
                    font-size: 4rem;
                }
            }
            @include media($large) {
                flex-basis: 100/12*4%;
                h1 {
                    font-size: 2.5rem;
                }
            }
        }
    }
    figure {
        margin: 0;
        img {
            width: 100%;
            height: auto;
        }
    }
    h1 {
        color: $primary;
        text-align: center;
        margin-left: 2.25rem;
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