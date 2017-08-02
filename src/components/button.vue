<template>
    <router-link :class="{button: !inverted, inverted: inverted, small: small, close: close}" tag="a" :to="linkTo"><slot></slot><img v-if="close" src="/dist/icons/close.svg"></router-link>
</template>

<style lang="scss" scoped="scoped">
    @import '../styles/_colors.scss';
    $color2: rgba($color-primary-0, .75);
    @mixin btn($color: $color-primary-0, $inverted: false) {
        color: $color;
        box-shadow: rgba($color, 0.8) 0 0px 0px .25rem inset;
        &:hover {
            @if $inverted == false {
                color: rgba(255, 255, 255, 0.85);
            } @else {
                color: $color;
            }
            box-shadow: rgba($color, 0.7) 0 0px 0px 2rem inset;
        }
    }
    a {
        transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
        display: inline-block;
        margin: .5rem auto;
        max-width: 9rem;
        text-decoration: none;
        border-radius: .2rem;
        padding: .5rem 1rem;
        text-align: center;
        font-family: 'Houschka';
        font-weight: 500;
        text-transform: uppercase;
        padding-top: .65rem;
    }
    a.button {
        @include btn();
    }
    a.inverted {
        @include btn(white, true);
    }
    a.small {
        max-width: 4rem;
        padding: .25rem .5rem;
        padding-top: .5rem;
        padding-bottom: .4rem;
        font-size: .75rem;
        margin: .25rem auto;
    }
    a.close {
        box-shadow: none;
        padding: 0;
        img {
            width: 50%;
        }
    }
</style>

<script>
    export default {
        name: 'Button',
        props: ['link', 'inverted', 'small', 'close'],
        computed: {
            linkTo() {
                return (this.link) ? this.link : ''
            }
        }
    }
</script>