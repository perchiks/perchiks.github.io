<template>
    <div class="container">
        <div class="column">
            <blog class="blog" feed="https://medium.com/feed/@ringer"></blog>
        </div>
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
        display: flex;
        flex-direction: row;
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
        @include media($small) {
            flex-basis: 95%;
            .column {
                width: 95%;
            }
            h1 {
                font-size: 4rem;
            }
        }
        @include media($medium) {
            flex-basis: 50%;
            .column {
                width: 50%;
            }
            h1 {
                font-size: 4rem;
            }
        }
        @include media($large) {
            flex-basis: 25%;
            .column {
                width: 25%;
            }
            h1 {
                font-size: 2.5rem;
            }
        }
        .column {
            display: flex;
            flex-direction: column;
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
    import Blog from '../components/blog.vue';

    export default {
        name: 'IndexPage',
        components: {
            blog: Blog
        }
    }
</script>