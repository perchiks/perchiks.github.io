<template>
    <article>
        <navigation :title="title"></navigation>
        <div class="form">
            <label><input type="text" v-model="email" placeholder="Login"></label>
            <label><input type="password" v-model="password" placeholder="Password"></label>
            <label><a class="btn" @click="auth()">Войти</a></label>
        </div>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import "../styles/_colors.scss";
    article {
        .form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-basis: 80%;
        }
        label {
            display: inline-flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            &:not(:first-of-type) {
                margin-top: 1rem;
            }
            input, textarea {
                width: 100%;
                border-radius: 4px;
                font-size: 0.75em;
                line-height: 1.0625em;
                border: 1px solid #D3D3D3;
                padding: .5rem;
            }
            a {
                border: 1px solid $primary;
                padding: .5rem;
                border-radius: 4px;
                color: $primary;
                text-transform: uppercase;
            }
        }
    }
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
                firebase.auth().signInWithEmailAndPassword(self.email, self.password).then(function() {
                    console.log('login ok');
                    self.$router.push({ path: '/admin/manage' });
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