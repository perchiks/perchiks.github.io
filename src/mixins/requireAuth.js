import firebase from 'firebase';

let requireAuth = {
    mounted() {
        let self = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                self.$router.push({path: '/login'});
            }
        });
    }
};

export default requireAuth;