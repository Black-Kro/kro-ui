import { RouteRecordRaw } from 'vue-router';

import Components from './index.md';
import App from './app.md';
import Alert from './alert.md';
import Button from './button.md';
import ButtonGroup from './button-group.md';
import Dialog from './dialog.md';
import Divider from './divider.md';
import Icon from './icon.md';
import Layout from './layout.md';
import List from './list.md';
import Navigation from './navigation.md';

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
        path: '/components/alert',
        component: Alert,
        meta: {
            title: 'Alert'
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
    {
        path: '/components/divider',
        component: Divider,
        meta: {
            title: 'Dividers'
        }
    },
    {
        path: '/components/icon',
        component: Icon,
        meta: {
            title: 'Icons'
        }
    },
    {
        path: '/components/layout',
        component: Layout,
        meta: {
            title: 'Layout'
        }
    },
    {
        path: '/components/list',
        component: List,
        meta: {
            title: 'List'
        }
    },
    {
        path: '/components/navigation',
        component: Navigation,
        meta: {
            title: 'Navigation'
        }
    },

];