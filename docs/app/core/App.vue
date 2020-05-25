<template>
    <div :class="$style.root">

        <kro-toolbar padded :class="$style.toolbar">
            <div :class="$style.toolbarContent">
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
                <app-sidebar :data="sidebar"></app-sidebar>
            </div>

            <div :class="$style.content">
                <div :class="$style.output">
                    <router-view></router-view>
                    <!-- <buttons-markdown></buttons-markdown> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useDocConfiguration } from '@docs/_internal';

    import ButtonsMarkdown from '../components/Buttons.md';
    import AppSidebar from './components/AppSidebar.vue';

    export default {
        components: {
            AppSidebar,
        },

        setup() {
            const { title, sidebar } = useDocConfiguration();


            return {
                title,
                sidebar
            }
        }
    }
</script>

<style lang="scss" module>

    .root {
        display: grid;
        padding-top: 4rem;
        // grid-template-rows: 4rem auto;

    }

    .body {
        display: grid;
        grid-template-columns: auto;
        padding-left: 275px;
    }


    .content {
        display: grid;
        justify-items: center;
    }


    .navigation {
        border-right: 1px solid #3B4252;
        position: fixed;
        width: 275px;
        top: 4rem; bottom: 0; left: 0;

        display: grid;
        align-items: center;
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
        }

    .output {
        max-width: 820px;
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

    // pre {
    //     padding: 1rem;
    //     background: #3B4252;
    //     border-radius: 0.25rem;

    //     font-family: 'Source Code Pro', monospace;
    //     font-size: 1rem;

    //     code {
    //         // font-size: 1em;
    //     }
    // }

    // p code {
    //     padding: 0 0.35rem;
    //     border-radius: 0.25rem;
    //     font-size: inherit;
    //     font-size: 0.65em;
    //     background: var(--kro-application-background-secondary);
    // }

    // p {
    //     font-size: 1rem;
    //     line-height: 1.7;
    //     color: #E5E9F0;
    // }

    // h1, h2, h3, h4, h5, h6 {
    //     font-weight: 600;
    //     line-height: 1.25;

    //     &:first-child {
    //         margin-top: -1.5rem;
    //         margin-bottom: 1rem;
    //     }
    // }

    // h1 {
    //     font-size: 2.2rem;
    // }

    // h2 {
    //     font-size: 1.65rem;
    //     padding-bottom: .3rem;
    //     border-bottom: 1px solid var(--kro-application-divider);
    // }

    // h3 {
    //     font-size: 1.35rem;
    // }

    // pre[class*=language-] {
    //     line-height: 1.4;
    //     padding: 1.25rem 1.5rem;
    //     margin: .85rem 0;
    //     background-color: #282c34;
    //     border-radius: 6px;
    //     overflow: auto;
    // }
</style>