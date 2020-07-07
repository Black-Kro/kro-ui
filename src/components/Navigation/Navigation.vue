<template>
    <div class="kro-navigation">
        <div :class="{
            'kro-navigation__scrim': true, 
            'kro-navigation--is-open': $attrs.modelValue,
            'kro-navigation--is-temporary': temporary, }" @click="close"></div>
        <div :class="{
            'kro-navigation__content': true, 
            'kro-navigation--is-open': $attrs.modelValue, 
            'kro-navigation--is-temporary': temporary}">
            <slot :close="close" :open="open"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        name: 'KroNavigation',
        props: {
            temporary: {
                type: Boolean,
                default: false,
            }
        },
        setup(props, { emit }) {

            const close = () => emit('update:modelValue', false);
            const open = () => emit('update:modelValue', true);

            return {
                open,
                close,
            }
        }
    }
</script>

<style lang="scss">

    @import '../../styles/general/breakpoints';

    .kro-navigation {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        pointer-events: none;
        z-index: 5000;
    }

    .kro-navigation__scrim {
        @include useBreakpoint('small') {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, .24);
            opacity: 0;
            pointer-events: none;
    
            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
            
            &.kro-navigation--is-open {
                pointer-events: all;
                opacity: 1;
            }
        }
    }
    
    .kro-navigation__content {
        position: absolute;
        top: 0; left: 0; bottom: 0;
        overflow: auto;

        -webkit-overflow-scrolling: touch;

        width: var(--kro-navigation-width, 275px);
        background: var(--kro-background);
        border-right: 1px solid var(--kro-divider);
        pointer-events: all;

        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

        @include useBreakpoint('small') {
            transform: translateX(-100%);
            &.kro-navigation--is-open { transform: translateX(0); }
        }

    }

</style>