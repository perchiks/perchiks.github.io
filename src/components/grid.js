import Vue from 'vue';

export const Container = Vue.component('container', {
    template: `<div :class="className" :style="style"><slot></slot></div>`,
    props: ['align', 'addClass'],
    data: function () {
        return {

        }
    },
    computed: {
        className() {
            if (this.addClass) {
                return 'container';
            }
        },
        style() {
            let alignment;
            if (this.align) {
                let align = this.align.split(' ');
                if (align.length > 0) {
                    if (align.length > 1) {
                        alignment = {
                            justifyContent: align[0],
                            alignItems: align[1]
                        };
                    } else if (align.length === 1) {
                        alignment = {
                            justifyContent: align[0],
                            alignItems: 'middle'
                        };
                    }
                } else {
                    alignment = {
                        justifyContent: 'center',
                        alignItems: 'middle'
                    };
                }
            } else {
                alignment = {
                    justifyContent: 'center',
                    alignItems: 'middle'
                };
            }
            return {
                display: 'flex',
                justifyContent: alignment.justifyContent,
                alignItems: alignment.alignItems,
                flexBasis: '100%'
            }
        }
    }
});

export const Column = Vue.component('column', {
    template: `<div :style="style"><slot></slot></div>`,
    props: ['size', 'grow'],
    computed: {
        style() {
            let generated = {
                flexBasis: '100%',
                flexDirection: 'column'
            };
            if (this.size) {
                generated.flexBasis = `${(100/12)*parseInt(this.size)}%`;
            }
            if (this.grow) {
                generated.flexGrow = this.grow;
            }
            return generated;
        }
    }
});