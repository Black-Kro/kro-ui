<template>
    <div :class="{
        'kro-layout': true,
        'kro-layout--has-navigation': !!$slots.navigation,
        'kro-layout--has-toolbar': !!$slots.toolbar,
        'kro-toolbar--has-content': !!$slots.content,
        'kro-toolbar--has-footer': !!$slots.footer,
    }">

        <div class="kro-layout__navigation" v-if="!!$slots.navigation">
            <slot name="navigation"></slot>
        </div>

        <div class="kro-layout__toolbar" v-if="!!$slots.toolbar">
            <slot name="toolbar"></slot>
        </div>

        <div class="kro-layout__content">
            <slot></slot>
        </div>

        <div class="kro-layout__footer" v-if="!!$slots.footer">
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

<style lang="scss">

    @import '../../styles/general/breakpoints';
    @import '../../styles/general/layers';

    .kro-layout--has-navigation {
        .kro-layout__content,
        .kro-layout__footer {
            margin-left: var(--kro-navigation-width, 275px);
            @include useBreakpoint('small') { margin-left: 0; }
        }
    }

    .kro-layout--has-toolbar {
        .kro-layout__navigation {
            top: var(--kro-toolbar-height, 4rem);
            @include useBreakpoint('small') { top: 0; }
        }

        .kro-layout__content {
            margin-top: var(--kro-toolbar-height, 4rem);
        }
    }

    .kro-layout__navigation {
        @include useLayer(navigation);

        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        pointer-events: none;
    }

    .kro-layout__toolbar {
        @include useLayer(toolbar);

        position: fixed;
        top: 0; left: 0; right: 0;
    }

</style>