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

To start, it is recommend you wrap your entire app in the `kro-app` component. This will provide helpful utilities throughtout the app
that will improve the user experience.

```html
<template>
    <kro-app>
        <!-- App Content -->
    </kro-app>
</template>
```

### Related Articles

<app-article-link to="/themes" title="Themes" subtitle="Customize the look of components"></app-article-link>