<template>
    <header>
        <div class="row center-xs">
            <div class="col-xs-12 col-md-8">
                <div class="box">
                    <div class="row center-xs">
                        <div class="col-xs">
                            <div class="box">
                                <img src="/dist/img/logo.svg">
                            </div>
                        </div>
                    </div>
                    <hr>
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
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';
    header {
        .logo {
            flex-grow: 0;
            @include media($small) {
                display: none;
            }
        }
        hr {
            height: 1px;
            border: 0;
            background: #e9e9e9;
            background: -webkit-gradient(linear, 0 0, 100% 0, from(white), to(white), color-stop(50%, #e9e9e9));
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
                padding: 1rem 0;
                &:hover {
                    color: $color-primary-1;
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