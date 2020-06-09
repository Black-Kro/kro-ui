<template>
    <div :class="$style.root">
        <div :class="{[$style.scrim]: true, [$style.isOpen]: $attrs.modelValue}" @click="close"></div>
        <div :class="{[$style.navigation]: true, [$style.isOpen]: $attrs.modelValue}">
            <slot :close="close" :open="open"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';

    export default {
        props: {
            value: {
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

<style module lang="scss">

    @import '../../styles/general/breakpoints';

    .root {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        pointer-events: none;
        z-index: 5000;
    }

    .scrim {
        @include useBreakpoint('small') {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, .24);
            opacity: 0;
            pointer-events: none;
    
            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
            
            &.isOpen {
                pointer-events: all;
                opacity: 1;
            }
        }
    }
    
    .navigation {
        position: absolute;
        top: 0; left: 0; bottom: 0;

        width: var(--kro-navigation-width, 275px);
        background: var(--kro-background);
        border-right: 1px solid var(--kro-divider);
        pointer-events: all;

        transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

        @include useBreakpoint('small') {
            transform: translateX(-100%);
            &.isOpen { transform: translateX(0); }
        }

    }

</style>