# Installation

## Download
```bash
npm install --save kro-ui
```
or
```bash
yarn add kro-ui
```

## Using it
```ts
import { createApp } from 'vue';

import App from './App.vue';
import KroUI from 'kro-ui';

createApp(App)
    .use(KroUI, {
        icons: {

        }
    })
    .mount('#app');
```
