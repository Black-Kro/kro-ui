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

export default {

    title: 'Kro UI',
    description: 'Documentation for',


    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/installation',
            component: Installation, 
        },
        {
            path: '/components',
            component: Components,
        },
        {
            path: '/components/buttons',
            component: Buttons,
        }, 
        {
            path: '/components/button-groups',
            component: ButtonGroups,
        },
        {
            path: '/components/textfields',
            component: Textfields,
        },
        {
            path: '/components/dialogs',
            component: Dialogs,
        },
        {
            path: '/components/icons',
            component: Icons,
        },
        {
            path: '/components/dividers',
            component: Dividers,
        },
        {
            path: '/components/alerts',
            component: Alerts,
        },
        {
            path: '/components/app',
            component: App,
        },
    ],

    sidebar: [
        {
            title: 'Installation',
            path: '/installation',
        },
        {
            title: 'Introduction',
            path: '/',
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
                    path: '/components/progress-bar'
                }
            ].sort((a, b) => {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1;}
                return 0;
            })
        }
    ]
    

} as DocumentationConfiguration;