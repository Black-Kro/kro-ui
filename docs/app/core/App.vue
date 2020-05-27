<template>
    <div :class="$style.root">
        <kro-toolbar padded :class="$style.toolbar">
            <div :class="$style.toolbarContent">
                <kro-icon-button @click="open" :class="$style.menuButton" icon="menu"></kro-icon-button>

                <div :class="$style.title">
                    <img :class="$style.logo" src="../../../src/assets/kro.svg" />
                    {{title}}
                </div>
                <div>
                    <kro-button href="https://github.com/black-kro/kro-ui">Github</kro-button>
                </div>
            </div>
        </kro-toolbar>

        <div :class="$style.body">

            <div :class="$style.navigation">
                <app-sidebar ref="sidebarRef" :data="sidebar"></app-sidebar>
            </div>

            <div :class="$style.content">
                <div :class="$style.output">
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <div id="kro-portal"></div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    import { useDocConfiguration } from '@docs/_internal';

    import ButtonsMarkdown from '../components/Buttons.md';
    import AppSidebar from './components/AppSidebar.vue';

    export default {
        components: {
            AppSidebar,
        },

        setup() {
            const { title, sidebar } = useDocConfiguration();
            const sidebarRef = ref<any>(undefined);

            const open = () => {
                console.log(sidebarRef.value);
                sidebarRef.value.open();
            }

            return {
                title,
                sidebar,

                sidebarRef,
                open
            }
        }
    }
</script>

<style lang="scss" module>

    .root {
        display: grid;
        padding-top: 4rem;
        // grid-template-rows: 4rem auto;

        --kro-docs-sidebar-width: 275px;
        --kro-docs-toolbar-height: 4rem;
        --kro-docs-content-width: 820px;
    }

    .body {
        display: grid;
        grid-template-columns: auto;
        padding-left: 275px;

        @media (max-width: 1095px) {
            padding-left: 0;
        }
    }

    .menuButton {
        display: none;
        @media (max-width: 1095px) {
            display: block;
        }
    }

    .content {
        display: grid;
        justify-items: center;
    }

    .toolbar {
        position: fixed;
        top: 0; left: 0; right: 0;
        background: var(--kro-application-background) !important;
        border-bottom: 1px solid #3B4252;
        z-index: 500;
    }

        .toolbarContent {
            display: grid;
            align-items: center;
            grid-template-columns: auto min-content;

            @media(max-width: 1095px) {
                grid-template-columns: min-content auto min-content;
                gap: 1rem;
            }
        }

    .output {
        max-width: var(--kro-docs-content-width);
        padding: 1rem;
        width: 100%;
    }


    .title {
        font-size: 1.5rem;
        font-weight: 600;

        display: grid;
        align-items: center;
        grid-template-columns: min-content auto;
        gap: 0.75rem;
    }

    .logo {
        height: 3.25rem;
        filter: drop-shadow(0.07rem 0.07rem #ff3232) drop-shadow(-0.05rem -0.05rem #00dcdc);
    }

</style>

<style lang="scss">

    @import '~highlight.js/scss/atom-one-dark';
    @import './styles/markdown';

</style>