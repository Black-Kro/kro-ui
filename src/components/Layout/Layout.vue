<template>
    <div :class="{
        [$style.root]: true,
        [$style.hasNavigation]: !!$slots.navigation,
        [$style.hasToolbar]: !!$slots.toolbar,
        [$style.hasContent]: !!$slots.content,
        [$style.hasFooter]: !!$slots.footer,
    }">

        <div :class="$style.navigation" v-if="!!$slots.navigation">
            <slot name="navigation"></slot>
        </div>

        <div :class="$style.toolbar" v-if="!!$slots.toolbar">
            <slot name="toolbar"></slot>
        </div>

        <div :class="$style.content" v-if="!!$slots.content">
            <slot name="content"></slot>
        </div>

        <div :class="$style.footer" v-if="!!$slots.footer">
            <slot name="footer"></slot>
        </div>

    </div>
</template>

<script lang="ts">
    import { KroToolbar } from '../Toolbar';

    export default {
        components: { KroToolbar }
    }
</script>

<style module lang="scss">

    @import '../../styles/general/breakpoints';

    .root {

        &.hasNavigation {
            .content { 
                margin-left: var(--kro-navigation-width, 275px); 
            
                @include useBreakpoint('small') {
                    margin-left: 0;
                }
            }
        }

        &.hasToolbar {
            .navigation { 
                top: var(--kro-toolbar-height, 4rem);
                
                @include useBreakpoint('small') {
                    top: 0;
                }
            }
            .content { margin-top: var(--kro-toolbar-height, 4rem); }
        }

    }

    .navigation {
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        pointer-events: none;
    }

    .toolbar {
        // color: red;
        position: fixed;
        top: 0; left: 0; right: 0;
    }

</style>