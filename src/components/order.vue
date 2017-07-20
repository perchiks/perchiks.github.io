<template>
        <form>
            <section v-show="!orderSent">
                <label><input type="text" v-model="fullName" placeholder="Ваше имя"></label>
                <label><input type="phone" v-model="phone" placeholder="Телефон"></label>
                <label><input type="email" v-model="email" placeholder="Электронная почта"></label>
                <label><textarea type="text" v-model="details" placeholder="Детали заказа"></textarea></label>
                <label><input type="file" @change="loadFile($event)" v-show="!file"></label>
                <label v-if="file">Файл загружен</label>
                <a @click="send()">Send</a>
            </section>
            <section v-show="orderSent && orderSent !== 'error'">
                <h2>Заказ отправлен. Скоро мы с вами свяжемся</h2>
            </section>
        </form>
</template>

<style lang="scss" scoped="scoped">
    section {
        display: flex;
        flex-direction: column;
        label {
            display: inline-flex;
            flex: 1;
        }
    }
</style>

<script>
    import firebase from 'firebase';

    export default {
        name: 'Order',
        data: function() {
           return {
               fullName: '',
               phone: '',
               email: '',
               details: '',
               orderSent: false,
               file: false
           }
        },
        methods: {
            send() {
                let utm = this.$store.state.user.utm;
                let uid = this.$store.state.user.uid;
                let self = this;
                let order = Math.random().toString(36).substring(7);
                firebase.database().ref(`orders/${order}`).set({
                    fullName: this.fullName,
                    phone: this.phone,
                    email: this.email,
                    details: this.details,
                    utm: utm,
                    uid: uid,
                    date: Date.now(),
                    completed: false,
                    file: (this.file) ? this.file : 'No file'
                }).then(function(data) {
                    self.orderSent = true;
                }).catch(function(err) {
                    self.orderSent = 'error';
                });
            },
            loadFile(event) {
                let file = event.target.files[0];
                const name = file.name;
                let storageRef = firebase.storage().ref();
                let ref = storageRef.child(`orders/${this.$store.state.user.uid}-${name}`);
                let self = this;
                ref.put(file).then(function(snapshot) {
                    self.file = snapshot.metadata.fullPath;
                });
            }
        }
    }
</script>