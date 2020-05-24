<template>
    <div :class="$style.root">

        <kro-toolbar :class="$style.toolbar"></kro-toolbar>

        <div :class="$style.body">

            <div :class="$style.navigation">
                Navigation
            </div>

            <div :class="$style.content">
                <div :class="$style.output">
                    <buttons-markdown></buttons-markdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonsMarkdown from '../components/Buttons.md';

    export default {
        components: {
            ButtonsMarkdown
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
        grid-template-columns: 320px auto;
    }


    .content {
        display: grid;
        justify-items: center;
    }


    .navigation {
        border-right: 1px solid #3B4252;
    }

    .toolbar {
        position: fixed;
        top: 0; left: 0; right: 0;
        background: var(--kro-application-background);
        border-bottom: 1px solid #3B4252;
    }

    .output {
        max-width: 820px;
        padding: 1rem;
        width: 100%;
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