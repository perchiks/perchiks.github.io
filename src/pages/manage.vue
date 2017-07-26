<template>
    <section>
        <router-link to="/post" class="btn">New post</router-link>
        <blog class="post" v-for="post in posts" :post="post.id" random="false" :key="post.id"></blog>
    </section>
</template>

<style lang="scss" scoped="scoped">
    section {
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
        align-self: center;
        justify-content: flex-start;
        align-items: center;
        .post {
            img {
                width: 100%;
            }
        }
    }
</style>

<script>
    import firebase from 'firebase';
    import blog from '../components/blog.vue';
    export default {
        name: 'Manage',
        components: {
            blog: blog
        },
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            let self = this;
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    let dbRef = firebase.database().ref('posts');
                    dbRef.on('value', function(snapshot) {
                        self.posts = snapshot.val();
                    });
                } else {
                    this.$router.push({path: '/login'});
                }
            });
        }
    }
</script>