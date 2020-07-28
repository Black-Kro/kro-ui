import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { App } from './app';
import { KroUIPlugin } from '../src';

import '../src/styles/themes/default.scss';

createApp(App)
    .use(KroUIPlugin)
    .use(createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: () => import('./Home.vue')
            }
        ]
    }))
    .mount('#app');