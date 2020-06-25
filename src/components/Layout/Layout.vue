<template>
    <div :class="{
        'kro-layout': true,
        'kro-layout--has-navigation': !!$slots.navigation,
        'kro-layout--has-toolbar': !!$slots.toolbar,
        'kro-toolbar--has-content': !!$slots.content,
        'kro-toolbar--has-footer': !!$slots.footer,
    }">

        <div :class="{
            'kro-layout__navigation': true,
            'fixed': fixed,
        }" v-if="!!$slots.navigation">
            <slot name="navigation"></slot>
        </div>

        <div :class="{ 'kro-layout__toolbar': true, 'fixed': fixed }" v-if="!!$slots.toolbar">
            <slot name="toolbar"></slot>
        </div>

        <div class="kro-layout__container">
            <div class="kro-layout__content">
                <slot></slot>
            </div>

            <div class="kro-layout__footer" v-if="!!$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
    import { KroToolbar } from '../Toolbar';

    export default {
        name: 'KroLayout',
        components: { KroToolbar },
        props: {
            fixed: Boolean
        }
    }
</script>

<style lang="scss">

    @import '../../styles/general/breakpoints';
    @import '../../styles/general/layers';

    .kro-layout {
        min-height: 100vh;
    }

    .kro-layout--has-navigation {
        .kro-layout__container {
            margin-left: var(--kro-navigation-width, 275px);
            @include useBreakpoint('small') { margin-left: 0; }
        }
    }

    .kro-layout--has-toolbar {
        min-height: calc(100vh - var(--kro-toolbar-height, 4rem));

        .kro-layout__navigation {
            top: var(--kro-toolbar-height, 4rem);
            @include useBreakpoint('small') { top: 0; }
        }

        .kro-layout__container {
            margin-top: var(--kro-toolbar-height, 4rem);
        }
    }

    .kro-layout--fixed {
        .kro-layout__toolbar,
        .kro-layout__navigation {
            position: fixed;
        }
    }

    .kro-layout__container {
        position: relative;
        min-height: inherit;
        overflow: hidden;

        display: grid;
        grid-template-rows: 1fr auto;
    }

    .kro-layout__navigation {
        @include useLayer(navigation);

        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        pointer-events: none;
    }

    .kro-layout__toolbar {
        @include useLayer(toolbar);

        position: absolute;
        top: 0; left: 0; right: 0;
    }

</style>