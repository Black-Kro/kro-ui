import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { App } from '@docs/app/core';
import { KroDocumentationPlugin } from './_internal/plugin';
import config from './config';

import AppPropDefinition from './app/core/components/AppPropDefinition.vue';

import KroUI from '@lib';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...config.routes,
    ]
})

createApp(App)
    .use(router)
    .use(KroUI, {
        icons: {

        }
    })
    .use(KroDocumentationPlugin, config)
    .component('app-prop-definition', AppPropDefinition)
    .mount('#app');
