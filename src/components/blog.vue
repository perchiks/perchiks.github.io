<template>
    <article>
        <div class="title">
            <h3><a :href="post.link" target="_blank">{{post.title}}</a></h3>
        </div>
        <!--<div class="content" v-html="post.description"></div>-->
        <pre>{{post}}</pre>
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
    let Twitter = require('twitter-node-client').Twitter;

    export default {
        name: 'Blog',
        props: ['feed'],
        data: function() {
            return {
                post: {}
            }
        },
        mounted() {
            let self = this;
            let config = {
                "consumerKey": "MQm1bwUHI2yXt3j782qcTfslR",
                "consumerSecret": "ZNjLBdUBCKZBzWd2FJlLmcUYITqiXUiaAgAMh1xCVUE0rVeTZe",
                "accessToken": "889799651658010624-2p0NonnyiMIquRXXgCf9tG4i4Wr2eas",
                "accessTokenSecret": "IUegb1EBoo5l4e8GXzKKbHjsyf47iWdSYzrWOW0i3GzBi",
                "callBackUrl": "https://pepper.ink"
            };

            let twitter = new Twitter(config);
            twitter.getUserTimeline({ screen_name: 'pepper_ink', count: '10'}, (error) => {
                self.$el.style.display = 'none';
                self.post = {};
            }, (data) => {
                self.post = data[Math.floor(Math.random()*data.length)];
            });
        }
    }
</script>