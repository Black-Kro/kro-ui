import '/~/styles/main.scss';
import '/~/styles/themes/default.scss';
import './style.scss';
import '@purge-icons/generated'

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import KroLogo from '../components/KroLogo.vue';
import { KroUIPlugin } from '/~/index';
import ThePageContext from '../components/ThePageContext.vue';
import TheSidebar from '../components/TheSidebar.vue';
import UpNext from '../components/UpNext.vue';
import { createApp } from 'vue';
import routes from 'voie-pages';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
    .use(router)
    .use(KroUIPlugin)
    .component('KroLogo', KroLogo)
    .component('TheSidebar', TheSidebar)
    .component('ThePageContext', ThePageContext)
    .component('UpNext', UpNext)
    .mount('#app');
