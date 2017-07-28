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
                let self = this;
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function() {
                    self.$router.push({ path: '/manage' });
                }).catch(function(error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log('login error', error);
                });
            }
        }
    }
</script>