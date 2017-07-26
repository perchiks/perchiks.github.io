<template>
    <article>
        <navigation :title="title"></navigation>
        <input type="text" v-model="email" placeholder="Login">
        <input type="password" v-model="password" placeholder="Password">
        <a class="btn">Sign in</a>
    </article>
</template>

<style lang="scss" scoped="scoped">

</style>

<script>
    import Navigation from '../components/Navigation.vue';
    import firebase from 'firebase';

    export default {
        name: 'SignIn',
        props: ['title'],
        components: {
            navigation: Navigation
        },
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            auth() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    // ...
                    if (!errorMessage) {
                        this.$router.push({ path: '/manage' });
                    }
                });
            }
        }
    }
</script>