<template>
    <div :class="$style.root">
        <div :class="$style.header">{{title}}</div>
        <div :class="$style.content">
            <div ref="slot">
                <slot></slot>
            </div>
        </div>
        <div v-html="renderedCode"></div>
    </div>
</template>

<script>
    import marked from 'marked';
    import { ref, onMounted, computed } from 'vue';

    import hljs from 'highlight.js';

    export default {
        props: {
            title: String,
            code: {
                type: String,
                default: 'Hey **I\'m bold** :)',
            },
        },
        setup(props) {
            return { 
                renderedCode: marked(props.code, { 
                    sanitize: true,
                    highlight: function(code, language) {
                        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
                        return hljs.highlight(validLanguage, code).value;
                    }
                })
            }
        }
    }
</script>

<style module lang="scss">
    .root {
        max-width: 960px;
        width: 100%;
        display: grid;
        margin-bottom: 1rem;
        padding: 1rem;
    }

    .header {
        // padding: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .content {
        padding: 1rem;
        margin-top: 1rem;
        border: 1px solid var(--kro-application-divider);
        background: var(--kro-application-background);
        border-radius: 0.25rem;
    }
</style>

<style lang="scss">

    pre {

        font-family: 'Roboto Mono', monospace;
        font-size: 1rem;
        background: #434C5E;
        padding: 1rem;
        border-radius: 0.25rem;
    }

    code {
        font-family: 'Roboto Mono', monospace;
        font-size: 1rem;
    }

    .hljs-tag {
        color: #88C0D0;
        font-style: italic;
    }

    .hljs-attr {
        color: #A3BE8C;
    }

</style>