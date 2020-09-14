import { RouteRecordRaw } from 'vue-router';

import Introduction from './introduction.md';
import Installation from './installation.md';
import Themes from './themes.md';

export const HomeRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Introduction,
        meta: {
            title: 'Introduction'
        }
    },
    {
        path: '/installation',
        component: Installation,
        meta: {
            title: 'Installation'
        }
    },
    {
        path: '/themes',
        component: Themes,
        meta: {
            title: 'Themes'
        }
    },
];
