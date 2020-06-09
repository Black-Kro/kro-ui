import { RouteRecordRaw } from 'vue-router';

import Composables from './index.md';

export const ComposableRoutes : RouteRecordRaw[] = [

    {
        path: '/composables',
        component: Composables,
        meta: {
            title: 'Composables'
        }
    }

];