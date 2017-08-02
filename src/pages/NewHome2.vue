<template>
    <article>
        <new-nav></new-nav>
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
        <section class="web_mobile">
            <div class="row around-xs">
                <div class="col-xs">
                    <div class="box">
                        <div class="row start-xs middle-xs">
                            <div class="col-xs-4 col-md-2">
                                <div class="box">
                                    <div class="title"><h2>Web</h2></div>
                                </div>
                            </div>
                            <div class="col-xs-8 col-md-8">
                                <div class="box">
                                    <div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="row end-xs middle-xs">
                            <div class="col-xs-4 col-md-2">
                                <div class="box">
                                    <div class="title"><h2>Mobile</h2></div>
                                </div>
                            </div>
                            <div class="col-xs-8 col-md-8">
                                <div class="box">
                                    <div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="row center-xs middle-xs">
            <div class="col-xs-8">
                <div class="box">
                    8
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';

    article {
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
    }

</style>

<script>
    import newNav from '../components/newNav2.vue';
    export default {
        name: 'Homepage2',
        components: {
            newNav: newNav
        }
    }
</script>