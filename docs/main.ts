import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { App } from '@docs/app/core';
import { KroDocumentationPlugin } from './_internal/plugin';

import KroUI from '@lib';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        
    ]
})

createApp(App)
    .use(KroUI, {
        icons: {

        }
    })
    .use(KroDocumentationPlugin)
    .mount('#app');
