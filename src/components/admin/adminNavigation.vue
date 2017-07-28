<template>
    <nav>
        <ul>
            <li><router-link to="/">На основной сайт</router-link></li>
            <li><router-link to="/manage">Все посты</router-link></li>
            <li><router-link to="/post">Создать</router-link></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped="scoped">
    @import "../../styles/_colors.scss";

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        width: 100%;
        ul {
            list-style-type: none;
            width: 100%;
            justify-content: space-between;
            display: flex;
            align-items: center;
            margin: 0;
            background: $color-primary-1;
            li {
                display: inline-flex;
                text-align: center;
                cursor: pointer;
                width: 100%;
                a {
                    text-decoration: none;
                    padding: 1rem;
                    display: block;
                    margin: 0 auto;
                    color: white;
                    font-family: 'Houschka';
                    font-size: 1.25rem;
                }
                &:not(:last-of-type) {
                    border-right: 1px solid white;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'adminNavigation'
    }
</script>