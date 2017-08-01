<template>
    <article>
        <new-nav class="navigation"></new-nav>
        <section class="lead row">
            <div class="col-xs">
                <div class="box">
                    <div class="row center-xs">
                        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-5">
                            <div class="img box">
                                <img src="/dist/img/rocket.svg">
                            </div>
                        </div>
                    </div>
                    <div class="row center-xs">
                        <div class="col-xs">
                            <div class="content box">
                                <h1>Добавь огня своему бизнесу</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                                <router-link to="/order" class="btn">Добавить</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section class="duotone">
            <div class="row around-xs">
                <div class="col-xs">
                    <div class="box">
                        <div class="row start-xs">
                            <div class="col-xs-3 col-md-2">
                                <div class="box">
                                    <div class="title"><h2>Web</h2></div>
                                </div>
                            </div>
                            <div class="col-xs-9 col-md-8">
                                <div class="box">
                                    <div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="row center-xs">
                            <div class="col-xs-10 col-md-8">
                                <div class="box"><img src="/dist/img/app.svg"></div>
                            </div>
                        </div>
                        <div class="row end-xs">
                            <div class="col-xs-3 col-md-2">
                                <div class="box">
                                    <div class="title"><h2>Mobile</h2></div>
                                </div>
                            </div>
                            <div class="col-xs-9 col-md-8">
                                <div class="box">
                                    <div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';

    article {
        height: 100%;
        * {
            font-family: 'Houschka';
        }
        .lead {
            padding-bottom: .5rem;
            img {
                width: 100%;
            }
            .content {
                text-align: center;
                padding-left: 10%;
                padding-right: 10%;
            }
            h1 {
                font-size: 2rem;
                font-weight: 900;
                font-family: 'Houschka';
                text-transform: uppercase;
                color: $color-primary-0;
                margin-top: 0;
            }
            p {
                font-family: 'Houschka';
                font-weight: normal;
                color: rgba($color-primary-0, .75);
            }
            .btn {
                border: .25rem solid rgba($color-primary-0, .75);
                color: rgba($color-primary-0, .75);
                text-transform: uppercase;
                text-decoration: none;
                padding: .25rem .5rem;
                font-family: 'Houschka';
                font-weight: bold;
                display: inline-block;
                margin-top: .5rem;
                transition: all ease-in .25s;
                &:hover {
                    color: $color-primary-0;
                    border-color: $color-primary-0;
                }
            }
        }
        .duotone {
            max-height: 100%;
            background-image: linear-gradient(to bottom, rgba($color-primary-0, .5), rgba($color-primary-0, .5)), url('/dist/img/bg_gs.png');
            background-size: cover;
            color: white;
            .title {
                padding: 0 1rem;
            }
            img {
                width: 100%;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
            .grow {
                flex-grow: 1;
            }
            .no-grow {
                flex-grow: 0;
            }
        }
    }
</style>

<script>
    import newNav from '../components/newNav.vue';

    export default {
        name: 'Homepage',
        components: {
            newNav: newNav
        }
    }
</script>