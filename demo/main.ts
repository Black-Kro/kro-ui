import { createApp } from 'vue';
import { App } from './app';
import { KroUIPlugin } from '../src';

import '../src/styles/themes/default.scss';

createApp(App)
    .use(KroUIPlugin)
    .mount('#app');