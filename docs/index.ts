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
                    {
                        title: 'Icon',
                        to: '/components/icon'
                    },
                    {
                        title: 'Layout',
                        to: '/components/layout'
                    },
                    {
                        title: 'List',
                        to: '/components/list'
                    },
                    {
                        title: 'Navigation',
                        to: '/components/navigation'
                    },
                    {
                        title: 'Progress Bar',
                        to: '/components/progress-bar'
                    },
                    {
                        title: 'Spinner',
                        to: '/components/spinner'
                    },
                    {
                        title: 'Squircle',
                        to: '/components/squircle'
                    },
                    {
                        title: 'Surface',
                        to: '/components/surface'
                    },
                    {
                        title: 'Switch',
                        to: '/components/switch'
                    },
                    {
                        title: 'Textfield',
                        to: '/components/textfield'
                    },
                    {
                        title: 'Toolbar',
                        to: '/components/toolbar'
                    },
                ]
            }
        ]
    } as KroPressPluginOptions)
    .mount('#app');
