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

<script lang="ts" setup="props, context">
    import { watchEffect, watch, computed, ref, isReactive, onRenderTriggered, toRefs, onUpdated } from 'vue';
    import { KroToolbar } from '../Toolbar';
    import { useMediaQuery } from '@vueuse/core';

    export const hasDrawer = ref(!!context.slots.drawer);

    export const isSmallScreen = useMediaQuery(`(max-width: ${props.responsiveWidth || 768}px)`);
    export const drawerWidth = computed(() => props.mini ? '6rem' : '16rem') as unknown as string;
    export const contentOffsetLeft = computed(() => (isSmallScreen.value || props.temporary || !hasDrawer.value) ? '0' : 'var(--drawerWidth)')  as unknown as string;
    export const toolbarHeight = computed(() => props.toolbarHeight || '4rem') as unknown as string;
    export const toolbarLeftOffset = computed(() => props.clipToolbar ? 'var(--contentOffsetLeft)' : '0') as unknown as string;
    export const drawerOffsetTop = computed(() => props.clipToolbar || isSmallScreen.value || props.temporary ? '0' : 'var(--toolbarHeight)') as unknown as string;

    // Since slots are not reactive this is a fix to respond to the toolbar being changed
    onUpdated(() => { hasDrawer.value = !!context.slots.drawer; })


    watchEffect(() => {
        context.emit('update:is-drawer-open', !(isSmallScreen.value || props.temporary));
        context.emit('update:is-drawer-hidden', isSmallScreen.value || props.temporary);
    })


    export default {
        name: 'KroLayout',
        components: { KroToolbar },
        emits: ['update:is-drawer-open', 'update:is-drawer-hidden'],
    };

    declare const props: {
        absolute?: boolean;
        responsiveWidth?: number;
        temporary?: boolean;
        right?: boolean;

        toolbarHeight?: string;
        clipToolbar?: boolean;
        mini?: boolean;
    }

    // declare const emit: any;
    // declare const slots: any;
    declare const context: any;
</script>

<style lang="scss" vars="{ drawerWidth, toolbarHeight, toolbarLeftOffset, drawerOffsetTop, contentOffsetLeft }">

    @import '../../styles/general/layers';

    .kro-layout {
        min-height: calc(100vh - var(--toolbarHeight));

        &__toolbar {
            @include useLayer(toolbar);

            @apply fixed top-0 right-0;
            left: var(--toolbarLeftOffset);
            height: var(--toolbarHeight);
        }

        &__drawer {
            @apply overflow-auto fixed left-0 bottom-0 scrolling-touch;

            top: var(--drawerOffsetTop);
            background: var(--kro-background);
            border-right: 1px solid var(--kro-divider);
            width: var(--drawerWidth);

            transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

            &--hidden {
                @include useLayer(drawer);
                @apply transform -translate-x-full;
            }

            &--is-open {
                @apply transform translate-x-0;          
            }
        }

        &__scrim {
            @include useLayer(drawer);
            @apply fixed inset-0 opacity-0 bg-black bg-opacity-25 pointer-events-none;

            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

            &--is-open {
                @apply opacity-100;
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

    }
</style>