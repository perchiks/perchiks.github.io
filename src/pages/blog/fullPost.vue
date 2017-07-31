<template>
    <article>
        <img v-show="item.file" :src="item.file">
        <h1>{{ item.title }}</h1>
        <div class="meta">
            <div>{{ dateP }}</div>
            <div>{{item.likes}}</div>
        </div>
        <div class="content" v-html="item.fullContent"></div>
        <div class="share">
            <a :href="tweetUrl" target="_blank"><img src="/dist/img/retweet_b.svg"></a>
        </div>
    </article>
</template>

<style lang="scss" scoped="scoped">
    article {
        display: flex;
        flex-direction: column;
        img {
            width: 100%;
        }
        h1 {

        }
        .meta, .share {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            a {
                img {
                    height: 1em;
                    display: inline;
                }
            }
        }
    }
</style>

<script>
    import firebase from 'firebase';
    import moment from 'moment';

    export default {
        name: 'fullPost',
        data() {
            return {
                item: {
                    title: '',
                    content: '',
                    file: false,
                    likes: '',
                    date: '',
                    fullContent: false,
                    id: ''
                }
            }
        },
        mounted() {
            let self = this;
            let dbRef = firebase.database().ref(`posts/${this.$route.params.id}`);
            dbRef.on('value', function(snapshot) {
                self.item = snapshot.val();
            });
        },
        computed: {
            dateP() {
                return moment(this.item.date).format('DD.MM.YYYY');
            },
            tweetUrl() {
                return `https://twitter.com/intent/tweet?text=${encodeURI(this.item.content)}&url=${encodeURI(this.$route.fullPath)}&hashtags=pepper_ink,перчик&via=pepper_ink`;
            }
        }
    }
</script>