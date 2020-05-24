<template>
    <div :class="$style.root">

        <kro-toolbar padded :class="$style.toolbar">
            <div>
                <div :class="$style.title">{{title}}</div>
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
        padding-left: 320px;
    }


    .content {
        display: grid;
        justify-items: center;
    }


    .navigation {
        border-right: 1px solid #3B4252;
        position: absolute;
        width: 320px;
        top: 4rem; bottom: 0; left: 0;

        display: grid;
        align-items: center;
    }

    .toolbar {
        position: fixed;
        top: 0; left: 0; right: 0;
        background: var(--kro-application-background) !important;
        border-bottom: 1px solid #3B4252;
    }

    .output {
        max-width: 820px;
        padding: 1rem;
        width: 100%;
    }


    .title {
        font-size: 1.3rem;
        font-weight: 600;
    }

</style>

<style lang="scss">

    @import '~highlight.js/scss/atom-one-dark';

    pre {
        padding: 1rem;
        background: #3B4252;
        border-radius: 0.25rem;

        font-family: 'Source Code Pro', monospace;
        font-size: 0.75rem;

        code {
            font-size: 0.75rem;
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.7;
        color: #E5E9F0;
    }

</style>