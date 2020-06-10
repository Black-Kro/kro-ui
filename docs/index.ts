import { createApp } from 'vue';
import { KroPressPlugin, KroPressPluginOptions } from '@kro-press';

import { App } from './templates';
import { PageRoutes } from './pages';

import * as DemoComponents from './demos';

// Use Nord Theme
import '@lib/styles/themes/nord.scss';

createApp(App)
    .use(KroPressPlugin, {
        title: 'Kro UI',
        components: { ...DemoComponents, },
        routes: [ ...PageRoutes, ],
        sidebar: [
            {
                title: 'Introduction',
                to: '/',
            },
            {
                title: 'Installation',
                to: '/installation'
            },
            {
                title: 'Themes',
                to: '/themes'
            },
            {
                title: 'Composables',
                to: '/composables',
                children: [
                    {
                        title: 'useDialog',
                        to: '/composables/useDialog'
                    }
                ]
            },
            {
                title: 'Components',
                to: '/components',
                children: [
                    {
                        title: 'App',
                        to: '/components/app'
                    },
                    {
                        title: 'Alert',
                        to: '/components/alert'
                    },
                    {
                        title: 'Button',
                        to: '/components/button'
                    },
                    {
                        title: 'Button Group',
                        to: '/components/button-group'
                    },
                    {
                        title: 'Dialog',
                        to: '/components/dialog'
                    },
                    {
                        title: 'Divider',
                        to: '/components/divider'
                    },
                ]
            }
        ]
    } as KroPressPluginOptions)
    .mount('#app');
