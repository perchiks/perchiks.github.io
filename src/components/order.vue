<template>
        <form>
            <section v-show="!orderSent">
                <label><input type="text" v-model="fullName" placeholder="Ваше имя"></label>
                <label><input type="phone" v-model="phone" placeholder="Телефон"></label>
                <label><input type="email" v-model="email" placeholder="Электронная почта"></label>
                <label><textarea type="text" v-model="details" placeholder="Детали заказа"></textarea></label>
                <label id="file" v-show="!file">
                    <span class="button" v-if="!file">Выбрать</span>
                    <mark>
                        <template v-if="!file">
                            Файл не выбран
                        </template>
                        <template v-if="file">
                            Файл загружен
                        </template>
                    </mark>
                    <input type="file" @change="loadFile($event)">
                </label>
                <label><a @click="send()">Отправить</a></label>
            </section>
            <section v-show="orderSent && orderSent !== 'error'">
                <h2>Заказ отправлен. Скоро мы с вами свяжемся</h2>
            </section>
        </form>
</template>

<style lang="scss" scoped="scoped">
    @import "../styles/_colors.scss";
    section {
        display: flex;
        flex-direction: column;
        flex-basis: 80%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
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
        #file {
            position: relative;
            overflow: hidden;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 4px;
            font-size: 0.75em;
            line-height: 1.0625em;
            border: 1px solid #D3D3D3;
            .button, > mark {
                cursor: pointer;
                display: inline-flex;
                padding: .5rem;
            }
            .button {
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                height: 100%;
                text-align: center;
                order: 2;
                background: rgba($primary, .75);
            }
            > mark{
                background: transparent;     /* example */
                flex: 1;
            }
            input[type=file]{
                position: absolute;
                top: 0;
                opacity: 0
            }
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