import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { App } from '@docs/app/core';
import { KroDocumentationPlugin } from './_internal/plugin';
import config from './config';

import AppPropDefinition from './app/core/components/AppPropDefinition.vue';
import DocsTextfieldDemo from './app/components/TextfieldExample.vue';
import DocsDialogDemo from './app/components/DialogExample.vue';
import UseDialogExample from './app/composables/useDialogExample.vue';

import KroUI from '@lib';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...config.routes,
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Kro UI`;
    next();
});

createApp(App)
    .use(router)
    .use(KroUI, {
        icons: {

        }
    })
    .use(KroDocumentationPlugin, config)
    .component('app-prop-definition', AppPropDefinition)
    .component('docs-textfield-demo', DocsTextfieldDemo)
    .component('docs-dialog-demo', DocsDialogDemo)
    .component('use-dialog-example', UseDialogExample)
    .mount('#app');
