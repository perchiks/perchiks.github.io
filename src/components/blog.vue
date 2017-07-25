<template>
    <article>
        <a class="twitter-timeline" data-lang="ru" href="https://twitter.com/pepper_ink">Tweets by pepper_ink</a>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    article {
        display: flex;
        flex-direction: column;
        .title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .title {
            h3 a {
                text-decoration: none;
                color: $primary;
            }
        }
    }
</style>

<script>
    export default {
        name: 'Blog'
    }
</script>