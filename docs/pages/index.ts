import { RouteRecordRaw } from 'vue-router';

import { HomeRoutes } from './home';
import { ComposableRoutes } from './composables';
import { ComponentRoutes } from './components';

export const PageRoutes: RouteRecordRaw[] = [
    ...HomeRoutes,
    ...ComposableRoutes,
    ...ComponentRoutes,
];
