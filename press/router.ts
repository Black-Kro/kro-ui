import { createRouter, createWebHistory, RouterOptions, RouteRecordRaw } from 'vue-router';

export const createKroPressRouter = (routes: RouteRecordRaw[]) => createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
    ]
});

