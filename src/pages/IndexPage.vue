<template>
    <article>
        <header>
            <div class="logo"><img src="/dist/img/logo.svg"></div>
            <nav></nav>
        </header>
        <div class="rnd">
            <post></post>
        </div>
        <div id="bg"></div>
        <!--<h1>Скоро здесь будет горячо</h1>-->
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';
    //------- NEW -----------
    article {
        display: flex;
        height: 60%;
        flex-direction: column;
        .rnd {
            align-self: center;
            justify-self: center;
        }
        #bg {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: -9999;
            background: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.4)), url(/dist/img/bg.png);
        }
        header {
            display: flex;
            flex-direction: row;
            flex-basis: 100%;
            nav {
                flex-grow: 1;
            }
        }
    }

    //-----------------------
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
    import Post from '../components/post.vue';

    export default {
        name: 'IndexPage',
        components: {
            blog: Blog,
            post: Post
        }
    }
</script>