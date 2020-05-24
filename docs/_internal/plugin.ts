import { Plugin } from 'vue';

import CodeBlock from './components/CodeBlock.vue';

export const KroDocumentationPlugin : Plugin = {
    install(app) {
        app.component('kro-docs-code-block', CodeBlock);
    }
}