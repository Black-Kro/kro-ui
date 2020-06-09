import { DocumentationConfiguration } from './_internal/config.interface';

import Home from './app/home/index.md';
import Installation from './app/home/install.md';

import Components from './app/components/index.md';

import Buttons from './app/components/Buttons.md';
import ButtonGroups from './app/components/ButtonGroups.md';
import Textfields from './app/components/Textfields.md';
import Dialogs from './app/components/Dialog.md';
import Icons from './app/components/Icons.md';
import Dividers from './app/components/Dividers.md';
import Alerts from './app/components/Alerts.md';
import App from './app/components/App.md';
import Lists from './app/components/Lists.md';
import ProgressBars from './app/components/ProgressBars.md';

import UseDialog from './app/composables/useDialog.md';

// @ts-ignore
export default {

    title: 'Kro UI',
    description: 'Documentation for',


    routes: [
        {
            meta: {
                title: 'Home'
            },
            path: '/',
            component: Home,
        },
        {
            meta: {
                title: 'Installation'
            },
            path: '/installation',
            component: Installation, 
        },
        {
            meta: {
                title: 'Components'
            },
            path: '/components',
            component: Components,
        },
        {
            meta: {
                title: 'Buttons'
            },
            path: '/components/buttons',
            component: Buttons,
        }, 
        {
            meta: {
                title: 'Button Groups'
            },
            path: '/components/button-groups',
            component: ButtonGroups,
        },
        {
            meta: {
                title: 'Textfields'
            },
            path: '/components/textfields',
            component: Textfields,
        },
        {
            meta: {
                title: 'Dialogs'
            },
            path: '/components/dialogs',
            component: Dialogs,
        },
        {
            meta: {
                title: 'Icons'
            },
            path: '/components/icons',
            component: Icons,
        },
        {
            meta: {
                title: 'Dividers'
            },
            path: '/components/dividers',
            component: Dividers,
        },
        {
            meta: {
                title: 'Alerts',
            },
            path: '/components/alerts',
            component: Alerts,
        },
        {
            meta: {
                title: 'App'
            },
            path: '/components/app',
            component: App,
        },
        {
            meta: {
                title: 'Lists'
            },
            path: '/components/lists',
            component: Lists,
        },
        {
            meta: {
                title: 'Progress Bars'
            },
            path: '/components/progress-bars',
            component: ProgressBars,
        },
        {
            meta: {
                title: 'useDialog'
            },
            path: '/composables/useDialog',
            component: UseDialog,
        },
    ],

    sidebar: [
        {
            title: 'Introduction',
            path: '/',
        },
        {
            title: 'Installation',
            path: '/installation',
        },
        {
            title: 'Themes',
            path: '/themes',
        },
        {
            title: 'Composables',
            path: 'Composables',
            children: [
                {
                    title: 'useToast',
                    path: '/composables/useToast',
                },
                {
                    title: 'useDialog',
                    path: '/composables/useDialog',
                }
            ]
        },
        {
            title: 'Components',
            path: '/components',
            children: [
                {
                    title: 'App',
                    path: '/components/app',
                },
                {
                    title: 'Buttons',
                    path: '/components/buttons',
                },
                {
                    title: 'Button Groups',
                    path: '/components/button-groups'
                },
                {
                    title: 'Textfields',
                    path: '/components/textfields'
                },
                {
                    title: 'Icons',
                    path: '/components/icons'
                },
                {
                    title: 'Tooltips',
                    path: '/components/tooltips'
                },
                {
                    title: 'Dialogs',
                    path: '/components/dialogs'
                },
                {
                    title: 'Alerts',
                    path: '/components/alerts'
                },
                {
                    title: 'Dividers',
                    path: '/components/dividers'
                },
                {
                    title: 'Menus',
                    path: '/components/menus'
                },
                {
                    title: 'Lists',
                    path: '/components/lists'
                },
                {
                    title: 'Treeview',
                    path: '/components/treeview'
                },
                {
                    title: 'Progress Bars',
                    path: '/components/progress-bars'
                }
            ].sort((a, b) => {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1;}
                return 0;
            })
        }
    ]
    

} as DocumentationConfiguration;