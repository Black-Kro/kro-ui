import { RouteRecordRaw } from 'vue-router';

import Composables from './index.md';
import UseDialog from './useDialog.md';

export const ComposableRoutes : RouteRecordRaw[] = [

    {
        path: '/composables',
        component: Composables,
        meta: {
            title: 'Composables'
        }
    },
    {
        path: '/composables/useDialog',
        component: UseDialog,
        meta: {
            title: 'useDialog'
        }
    }

];