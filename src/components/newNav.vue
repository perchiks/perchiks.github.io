<template>
    <header>
        <div class="logo"><img src="/dist/img/logo.svg"></div>
        <nav class="row end-sm start-xs middle-xs">
            <div class="col-xs">
                <div class="box">
                    <a>Nav 1</a>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                    <a>Nav 2</a>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                    <a>Nav 3</a>
                </div>
            </div>
            <div class="col-xs">
                <div class="box">
                    <a>Nav 4</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';
    header {
        display: flex;
        flex-direction: row;
        .logo {
            flex-grow: 0;
            @include media($small) {
                display: none;
            }
        }
        nav {
            flex-grow: 1;
            flex-wrap: wrap;
            text-align: center;
            a {
                display: block;
                text-decoration: none;
                color: $color-primary-0;
                transition: all ease-in .25s;
                cursor: pointer;
                font-size: 1rem;
                text-transform: uppercase;
                &:hover {
                    color: $color-primary-1;
                }
                @include media($small) {
                    padding: .5rem 0;
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'newNav'
    }
</script>