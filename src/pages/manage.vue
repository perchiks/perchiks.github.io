<template>
    <section>
        <navigation></navigation>
        <div class="wrapper">
            <h1>Все посты</h1>
            <blog class="post" v-for="post in posts" :post="post.id" random="false" :key="post.id"></blog>
        </div>
    </section>
</template>

<style lang="scss" scoped="scoped">
    section {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        align-self: center;
        justify-content: flex-start;
        align-items: center;
        .wrapper {
            width: 100%;
            margin-top: 1.5rem;
        }
    }
</style>

<script>
    import firebase from 'firebase';
    import blog from '../components/blog.vue';
    import adminNavigation from '../components/admin/adminNavigation.vue';
    import requireAuth from '../mixins/requireAuth';

    export default {
        name: 'Manage',
        mixins: [requireAuth],
        components: {
            blog: blog,
            navigation: adminNavigation
        },
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            let self = this;
            let dbRef = firebase.database().ref('posts');
            dbRef.on('value', function(snapshot) {
                self.posts = snapshot.val();
            });
        }
    }
</script>