<template>
    <article>
        <img :src="item.file">
        <h3><router-link :to="'/post/' + item.id">{{item.title}}</router-link></h3>
        <div class="content" v-html="item.content"></div>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    article {
        img {
            width: 100%;
        }
    }
</style>

<script>
    import firebase from 'firebase';

    export default {
        name: 'Blog',
        props: ['post', 'random'],
        data() {
            return {
                item: {
                    file: '',
                    content: '',
                    title: ''
                }
            }
        },
        mounted() {
            let self = this;
            if (this.random === 'true') {
                let dbRef = firebase.database().ref(`posts`);
                dbRef.on('value', function(snapshot) {
                    let items = snapshot.val();
                    console.log(typeof items);
                    self.item = items[Math.floor(Math.random()*items.length)];
                });
            } else {
                let dbRef = firebase.database().ref(`posts/${self.post}`);
                dbRef.on('value', function(snapshot) {
                    self.item = snapshot.val();
                });
            }
        }
    }
</script>