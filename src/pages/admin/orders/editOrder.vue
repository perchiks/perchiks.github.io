<template>
    <form>
        <section v-show="!orderSent">
            <label><input type="text" v-model="fullName" placeholder="Ваше имя"></label>
            <label><input type="phone" v-model="phone" placeholder="Телефон"></label>
            <label><input type="email" v-model="email" placeholder="Электронная почта"></label>
            <label><textarea type="text" v-model="details" placeholder="Детали заказа"></textarea></label>
            <label id="file">
                <span class="button" v-if="!loaded">Выбрать</span>
                <mark>
                        <span v-if="!loaded">
                            Файл не выбран
                        </span>
                    <span v-if="loaded">
                            Файл загружен
                        </span>
                </mark>
                <input type="file" @change="loadFile($event)">
            </label>
            <label><a @click="send()">Отправить</a></label>
        </section>
        <section v-show="orderSent && orderSent !== 'error'">
            <h4>Заказ сохранен</h4>
        </section>
    </form>
</template>

<style lang="scss" scoped="scoped">

</style>

<script>
    export default {
        name: 'editOrder',

    }
</script>