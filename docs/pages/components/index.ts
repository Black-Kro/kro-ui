import { RouteRecordRaw } from 'vue-router';

import Components from './index.md';

export const ComponentRoutes : RouteRecordRaw[] = [

    {
        path: '/components',
        component: Components,
        meta: {
            title: 'Components'
        }
    }

];