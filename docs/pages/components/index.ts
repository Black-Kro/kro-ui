import { RouteRecordRaw } from 'vue-router';

import Components from './index.md';
import App from './app.md';
import Button from './button.md';
import ButtonGroup from './button-group.md';
import Dialog from './dialog.md';

export const ComponentRoutes : RouteRecordRaw[] = [

    {
        path: '/components',
        component: Components,
        meta: {
            title: 'Components'
        }
    },
    {
        path: '/components/app',
        component: App,
        meta: {
            title: 'App'
        }
    },
    {
        path: '/components/button',
        component: Button,
        meta: {
            title: 'Button'
        }
    },
    {
        path: '/components/button-group',
        component: ButtonGroup,
        meta: {
            title: 'Button Group'
        }
    },
    {
        path: '/components/dialog',
        component: Dialog,
        meta: {
            title: 'Dialog'
        }
    },

];