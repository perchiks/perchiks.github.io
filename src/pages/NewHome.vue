<template>
    <article>
        <new-nav class="navigation"></new-nav>
        <section class="lead">
            <div class="content">
                <h1>Добавь огня своему бизнесу</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                <router-link to="/order" class="btn">Добавить</router-link>
            </div>
        </section>
        <section class="duotone">
            <div>
                <div class="title"><h2>Web</h2></div>
                <div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p></div>
            </div>
            <div class="center"><img src="/dist/img/app.svg"></div>
            <div>
                <div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p></div>
                <div class="title"><h2>Mobile</h2></div>
            </div>
        </section>
        <!--<section class="b-grid">
            <div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu. Nunc consectetur lectus a commodo eleifend. Nulla consequat augue felis, non vestibulum metus lacinia at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec interdum vitae ligula vel vehicula. Aliquam quis commodo lacus.</p>
                </div>
            </div>
        </section>-->
    </article>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    @import '../styles/_mq.scss';

    article {
        height: 100%;

        .navigation {
            /*position: absolute;
            top: 0;*/
            background: rgba(0,0,0,.85);

        }
        .lead {
            background-image: url('/dist/img/rocket.svg');
            background-size: 100% 80%;
            background-position: center top;
            background-repeat: no-repeat;
            height: 90%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-direction: column;
            padding-top: .5rem;
            padding-bottom: 1rem;
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
            }

        }
        .b-grid {
            height: 100%;
            > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: calc(100%/3);
                justify-content: space-around;
                > div {
                    padding: 0 1rem;
                    text-align: center;
                    flex-basis: calc(100%/3);
                }
                > div:nth-child(odd) {
                    align-self: flex-start;
                    position: relative;
                    top: 1rem;
                    //text-align: left;
                    //padding-left: .5rem;
                }
                > div:nth-child(even) {
                    align-self: flex-end;
                    position: relative;
                    top: -1rem;
                    //text-align: right;
                    //padding-right: .5rem;
                }
            }
        }
        .duotone {
            height: 100%;
            background-image: linear-gradient(to bottom, rgba($color-primary-0, .5), rgba($color-primary-0, .5)), url('/dist/img/bg_gs.png');
            background-size: cover;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 0 1rem;
                width: calc(100%/1.75);
                .title {
                    padding: 0 1rem;
                }
                .content {

                }
            }
            > div:first-of-type {
                align-self: flex-start;
                position: relative;
                top: 1rem;
            }
            > div:last-of-type {
                align-self: flex-end;
                position: relative;
                top: -1rem;
            }
            .center {
                align-self: center;
                width: 70%;
                img {
                    width: 100%;
                }
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