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
        <section class="features">
            <div class="title">
                <img src="/dist/img/build.svg">
                <h3>Title here</h3>
            </div>
            <div class="features_content">
                <div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
                    </div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
                    </div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
                    </div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
                    </div>
                </div>
                <div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
                    </div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
                    </div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
                    </div>
                    <div>
                        <div><img src="//placehold.it/200x200"></div>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis eu lorem eu vestibulum. Phasellus consectetur eros at consequat congue. Integer nibh lectus, tempor ac luctus et, placerat ac arcu.</p></div>
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
            background-image: url('/dist/img/rocket.svg');
            background-size: 100% 70%;
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
                transition: all ease-in .25s;
                &:hover {
                    color: $color-primary-0;
                    border-color: $color-primary-0;
                }
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
            position: relative;
            z-index: 1;
            > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 0 1rem;
                width: calc(100%/1.61803398875);
                flex: 1;
                @include media($medium) {
                    width: 90%;
                }
                @include media($small) {
                    width: 90%;
                }
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
                justify-content: center;
                img {
                    width: 80%;
                }
            }
            &:after {
                content: "";
                display: block;
                height: 100px;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: -6.25rem;
                -ms-transform: scaleX(1.1);
                transform: scaleX(1.1);
                -ms-transform-origin: center center;
                transform-origin: center center;
                background-color: rgba($color-primary-0, .5);
                border-bottom-left-radius: 100%;
                border-bottom-right-radius: 100%;
                z-index: 0;
            }
        }
        .features {
            position: relative;
            margin-top: 8rem;
            height: 100%;
            &:before {
                width: 100%;
                height: 1px;
                background: #ddd;
                content: "";
                position: absolute;
                top: 60px;
                z-index: 1;
            }
            &:after {
                z-index: 2;
                width: 60px;
                height: 2px;
                left: 50%;
                top: 60px;
                transform: translateX(-50%);
                background: #fff;
                content: "";
                position: absolute;
            }
            .title {
                text-align: center;
                img {
                    position: relative;
                    z-index: 3;
                    max-width: 5%;
                }
            }
            .features_content {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                height: 70%;
                padding: 0 4rem;
                > div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    height: 100%;
                    flex-basis: 50%;
                    > div {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        margin-top: 1rem;
                        > div:first-of-type {
                            flex-basis: 40%;
                            padding: 0 1rem;
                        }
                        img {
                            max-width: 100%;
                        }
                    }
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