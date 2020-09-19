import './style.scss'
import '/~/styles/main.scss'
import '/~/styles/themes/default.scss'
import '@purge-icons/generated'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import routes from 'voie-pages'
import KroLogo from '../components/KroLogo.vue'
import { KroUIPlugin } from '/~/index'
import ThePageContext from '../components/ThePageContext.vue'
import TheSidebar from '../components/TheSidebar.vue'
import UpNext from '../components/UpNext.vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(KroUIPlugin)
  .component('KroLogo', KroLogo)
  .component('TheSidebar', TheSidebar)
  .component('ThePageContext', ThePageContext)
  .component('UpNext', UpNext)
  .mount('#app')
