<template>
    <div class="post">
        <img v-show="item.file" :src="item.file">
        <div class="content">
            <h3>@pepper_ink</h3>
            <p>{{ item.content }}</p>
        </div>
        <div class="social">
            <router-link :to="fullLink" v-show="item.fullContent"></router-link>
            <nav>
                <ul>
                    <li>{{ dateP }}</li>
                    <li><a :href="tweetUrl" target="_blank"><i class="icon-retweet"></i></a></li>
                    <li @click="like()"><i class="icon-like"></i> {{ item.likes }}</li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/colors';

    .post {
        position: relative;
        background: rgba(238, 50, 36, 0.5);
        box-shadow: 5px 5px 6px rgba(155, 11, 0, 0.25);
        border-radius: 5px;
        max-width: 95%;
        width: 25rem;
        height: 12.5rem;
        > img {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            width:auto;
            height:auto;
            max-width: 25rem;
            max-height: 12.5rem;
            object-fit: contain;
            margin: 0 auto;
        }
        .content {
            padding-left: 2.25rem;
            padding-top: 2rem;
            padding-right: 2.25rem;
            h3 {
                font-family: 'Houschka';
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                font-size: 1.125rem;
                color: #FFFFFF;
                margin-top: 0;
                margin-bottom: 0.9375rem;
            }
            p {
                height: 3.875rem;
                overflow: hidden;
                display: block;
                font-family: 'Houschka';
                font-style: normal;
                font-weight: 600;
                line-height: 1.375rem;
                font-size: 1rem;
                text-transform: uppercase;
                color: #FFFFFF;
                margin-top: 0;
            }
        }
        .social {
            display: flex;
            flex-direction: row;
            flex-basis: 100%;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 0.8125rem;
            padding-left: 2.25rem;
            padding-right: 2.25rem;
            > a {
                opacity: 0;
                background: #EE3224;
                border-radius: 2px;
                font-family: 'Houschka';
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                font-size: 0.46875rem;
                text-transform: uppercase;
                color: #FFFFFF;
                padding-left: 1rem;
                padding-right: 1rem;
                padding-top: 0.3125rem;
                padding-bottom: 0.3125rem;
                line-height: 1rem;
                display: block;
                text-align: center;
            }
            nav {
                ul {
                    list-style-type: none;
                    li {
                        display: inline-block;
                        height: 0.75rem;
                        font-family: 'Houschka';
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                        font-size: 0.75rem;
                        color: #FFFFFF;
                        cursor: pointer;
                        text-transform: uppercase;
                        &:not(:last-of-type) {
                            margin-right: 1.25rem;
                        }
                        img {
                            display: inline;
                            height: 0.75rem;
                            width: auto;
                        }
                        a, i {
                            font-size: 0.75rem;
                            text-decoration: none;
                            color: white;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    import firebase from 'firebase';
    import moment from 'moment';

    export default {
        name: 'PostView',
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
            let dbRef = firebase.database().ref(`posts`);
            dbRef.on('value', function(snapshot) {
                let items = snapshot.val();
                if (typeof items === "object") {
                    let keys = Object.keys(items);
                    if (keys.length === 1) {
                        let index = keys[0];
                        self.item = items[index];
                    }

                } else {
                    self.item = items[Math.floor(Math.random()*items.length)];
                }
            });
        },
        computed: {
            dateP() {
                return moment(this.item.date).format('MMM, DD');
            },
            tweetUrl() {
                return `https://twitter.com/intent/tweet?text=${encodeURI(this.item.content)}&url=${encodeURI('https://pepper.ink')}&hashtags=pepper_ink,перчик&via=pepper_ink`;
            },
            fullLink() {
                return `/blog/post/${this.item.id}`;
            }
        },
        methods: {
            like() {
                let self = this;
                firebase.database().ref(`posts/${self.item.id}`).update({
                    likes: parseInt(self.item.likes) + 1
                }).then(function(data) {
                    //self.item.likes = parseInt(self.item.likes) + 1;
                }).catch(function(err) {
                    //self.orderSent = 'error';
                });
            }
        }
    }
</script>