import { RouteRecordRaw } from 'vue-router';

import Components from './index.md';
import App from './app/index.md';
import Alert from './alert/index.md';
import Button from './button/index.md';
import ButtonGroup from './button-group.md';
import Dialog from './dialog/index.md';
import Divider from './divider/index.md';
import Icon from './icon/index.md';
import Layout from './layout/index.md';
import List from './list/index.md';
import Navigation from './navigation.md';
import ProgressBar from './progress-bar.md';
import Spinner from './spinner.md';
import Squircle from './squircle.md';
import Surface from './surface.md';
import Switch from './switch/index.md';
import Textfield from './textfield/index.md';
import Toolbar from './toolbar.md';
import Menu from './menu.md';
import Select from './select/index.md';
import Slider from './slider/index.md';

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
        name: 'DialogPage',
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
        path: '/components/menu',
        component: Menu,
        meta: {
            title: 'Menu'
        }
    },
    {
        path: '/components/navigation',
        component: Navigation,
        meta: {
            title: 'Navigation'
        }
    },
    {
        path: '/components/progress-bar',
        component: ProgressBar,
        meta: {
            title: 'Progress Bar'
        }
    },
    {
        path: '/components/spinner',
        component: Spinner,
        meta: {
            title: 'Spinner'
        }
    },
    {
        path: '/components/squircle',
        component: Squircle,
        meta: {
            title: 'Squircle'
        }
    },
    {
        path: '/components/surface',
        component: Surface,
        meta: {
            title: 'Surface'
        }
    },
    {
        path: '/components/switch',
        component: Switch,
        meta: {
            title: 'Switch'
        }
    },
    {
        path: '/components/textfield',
        component: Textfield,
        meta: {
            title: 'Textfield'
        }
    },
    {
        path: '/components/toolbar',
        component: Toolbar,
        meta: {
            title: 'Toolbar'
        }
    },
    {
        path: '/components/select',
        component: Select,
        meta: {
            title: 'Select'
        }
    },
    {
        path: '/components/slider',
        component: Slider,
        meta: {
            title: 'Slider'
        }
    },

];