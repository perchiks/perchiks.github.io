<template>
    <section>
        <navigation></navigation>
        <form>
            <section v-show="!orderSent">
                <label><input type="text" v-model="post.title" placeholder="Заголовок"></label>
                <label><textarea v-model="post.content" placeholder="Короткое описание" rows="3"></textarea></label>
                <label><textarea v-model="post.fullContent" placeholder="Полный текст" rows="15"></textarea></label>
                <label id="file">
                    <span class="button" v-if="!loaded && !post.file">Выбрать</span>
                    <span class="button" v-if="post.file" @click="deleteFile()">Удалить</span>
                    <mark>
                        <span v-if="!loaded && !post.file">
                            Файл не выбран
                        </span>
                        <span v-if="loaded && !post.file">
                            Файл загружен
                        </span>
                        <span v-if="post.file">{{ post.file }}</span>
                    </mark>
                    <input type="file" @change="loadFile($event)">
                </label>
                <label><input type="number" v-model="post.likes" placeholder="Лайки"></label>
                <label><a @click="send()">Отправить</a></label>
            </section>
            <section v-show="orderSent && orderSent !== 'error'">
                <h4>Пост сохранен</h4>
            </section>
        </form>
    </section>
</template>

<style lang="scss" scoped="scoped">
    @import "../../../styles/colors";
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
    import adminNavigation from '../../../components/admin/adminNavigation.vue'

    export default {
        name: 'editPost',
        components: {
            navigation: adminNavigation
        },
        data() {
            return {
                post: {},
                orderSent: false,
                file: false,
                loaded: false
            }
        },
        methods: {
            send() {
                let self = this;
                firebase.database().ref(`posts/${self.$route.params.post}`).set({
                    id: self.$route.params.post,
                    title: self.post.title,
                    content: self.post.content,
                    date: Date.now(),
                    likes: self.post.likes,
                    fullContent: self.post.fullContent,
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
                let ref = storageRef.child(`posts/${Date.now()}-${name}`);
                let self = this;
                ref.put(file).then(function(snapshot) {
                    self.loaded = true;
                    self.file = snapshot.downloadURL;
                });
            },
            deleteFile() {
                this.file = false;
                this.post.file = '';
            }
        },
        mounted() {
            let self = this;
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    let dbRef = firebase.database().ref(`posts/${self.$route.params.post}`);
                    dbRef.on('value', function(snapshot) {
                        self.post = snapshot.val();
                        self.file = self.post.file;
                    });
                } else {
                    self.$router.push({path: '/login'});
                }
            });
        }
    }
</script>