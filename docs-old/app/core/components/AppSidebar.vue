<template>
    <div>
        <div :class="{[$style.root]: true, [$style.isOpen]: isOpen}">
            <app-sidebar-item @click="close" v-for="item in sidebar" :key="item.path" :data="item"></app-sidebar-item>
        </div>
        <div @click="close" :class="{[$style.scrim]: true, [$style.isOpen]: isOpen}"></div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    import { useDocConfiguration } from '@docs/_internal';
    
    import AppSidebarItem from './AppSidebarItem.vue';

    export default {
        name: 'AppSidebar',
        components: { AppSidebarItem },
        props: {
            data: {
                required: true
            },
        },
        setup(props) {
            const { sidebar } = useDocConfiguration();
            const isOpen = ref(false);

            const open = () => {
                isOpen.value = true;
            }

            const close = () => {
                isOpen.value = false;
            }

            const toggle = () => {
                isOpen.value ? close() : open();
            }

            return {
                isOpen,
                sidebar,

                open,
                close,
                toggle
            }
        }
    }
</script>

<style module lang="scss">

    .root {
        background: var(--kro-background);
        width: var(--kro-docs-sidebar-width);

        border-right: 1px solid var(--kro-divider);

        position: fixed;
        top: var(--kro-docs-toolbar-height); left: 0; bottom: 0;

        // display: grid;
        // align-content: center;
        grid-auto-rows: min-content;
        overflow: auto;
        padding: 1rem 0;
        -webkit-overflow-scrolling: touch;

        @media (max-width: 1095px) {

            transform: translateX(-100%);
            top: 0;

            z-index: 9003;
            transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

            &.isOpen {
                transform: translateX(0);
            }
        }
    }

    .scrim {
        @media (max-width: 1095px) {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, .24);
            z-index: 9002;
            pointer-events: none;
            opacity: 0;
            transition: opacity 150ms cubic-bezier(0.4, 0.0, 0.2, 1);

            &.isOpen {
                opacity: 1;
                pointer-events: all;
            }
        }
    }

</style>