<template>
    <router-link tag="article" :to="'/post/' + item.id">
        <div>{{item.id}}</div>
        <div>{{item.content}}</div>
        <div><img :src="item.file"></div>
    </router-link>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    article {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $color-primary-2;
        border-top: 1px solid $color-primary-2;
        cursor: pointer;
        font-family: 'Houschka';
        &:hover {
            background: rgba($color-primary-2, .5);
            color: white;
        }
        img {
            height: 4rem;
            width: auto;
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