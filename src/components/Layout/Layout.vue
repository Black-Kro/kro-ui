<template>
    <div class="kro-layout">
        <div v-if="!!$slots.drawer" class="kro-layout__scrim" :class="{ 'kro-layout__scrim--is-open': $attrs['is-drawer-open'] && (isSmallScreen || temporary) }" @click="$emit('update:is-drawer-open', false)"></div>
        <div v-if="!!$slots.drawer" class="kro-layout__drawer" :class="{ 'kro-layout__drawer--hidden': isSmallScreen || temporary, 'kro-layout__drawer--is-open': $attrs['is-drawer-open'] }">
            <slot name="drawer"></slot>
        </div>
        <div v-if="!!$slots.toolbar" class="kro-layout__toolbar">
            <slot name="toolbar"></slot>
        </div>
        <div class="kro-layout__container">
            <div v-if="!!$slots.default" class="kro-layout__content">
                <slot></slot>
            </div>
            <div v-if="!!$slots.footer" class="kro-layout__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup="props, { slots, emit }">
    import { watchEffect, computed } from 'vue';
    import { KroToolbar } from '../Toolbar';
    import { useMediaQuery } from '@vueuse/core';

    export const isSmallScreen = useMediaQuery(`(max-width: ${props.responsiveWidth || 768}px)`);

    export const drawerWidth = computed(() => props.drawerWidth || props.mini ? '6rem' : '16rem');
    export const contentOffsetLeft = computed(() => (isSmallScreen.value || props.temporary || !slots.drawer) ? '0' : 'var(--drawerWidth)');
    export const toolbarHeight = computed(() => props.toolbarHeight || '4rem');
    export const toolbarLeftOffset = computed(() => props.clipToolbar ? 'var(--contentOffsetLeft)' : '0');
    export const drawerOffsetTop = computed(() => props.clipToolbar || isSmallScreen.value || props.temporary ? '0' : 'var(--toolbarHeight)');

    watchEffect(() => {
        emit('update:is-drawer-open', !(isSmallScreen.value || props.temporary));
        emit('update:is-drawer-hidden', isSmallScreen.value || props.temporary);
    })

    export default {
        name: 'KroLayout',
        components: { KroToolbar },
    };

    declare const props: {
        absolute?: boolean;
        responsiveWidth?: number;
        temporary?: boolean;
        right?: boolean;

        drawerWidth?: string;
        toolbarHeight?: string;
        clipToolbar?: boolean;
        mini?: boolean;
    }

    declare const emit: any;
    declare const slots: any;
</script>

<style lang="scss" vars="{ drawerWidth, toolbarHeight, toolbarLeftOffset, drawerOffsetTop, contentOffsetLeft }">

    @import '../../styles/general/layers';

    .kro-layout {

        min-height: calc(100vh - var(--toolbarHeight));

        &__toolbar {
            @include useLayer(toolbar);

            position: fixed;
            top: 0; left: var(--toolbarLeftOffset); right: 0;
            height: var(--toolbarHeight);
        }

        &__drawer {
            @include useLayer(drawer);

            position: fixed;
            top: var(--drawerOffsetTop); left: 0; bottom: 0;
            background: var(--kro-background);
            border-right: 1px solid var(--kro-divider);
            width: var(--drawerWidth);

            transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);


            &--hidden {
                transform: translateX(-100%);
            }

            &--is-open {
                transform: translateX(0);                
            }
        }

        &__scrim {
            @include useLayer(drawer);

            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, .24);
            opacity: 0;
            pointer-events: none;

            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

            &--is-open {
                opacity: 1;
                pointer-events: all;
            }
        }

        &__container {
            margin-top: var(--toolbarHeight);
            margin-left: var(--contentOffsetLeft);
            min-height: inherit;

            display: grid;
            grid-template-rows: 1fr auto;
        }

        &__content {
            // min-height: inherit;
            
        }

        &__footer {

        }

    }
</style>