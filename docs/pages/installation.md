# Installation
Before using Kro UI you will need to be using the latest version of Vue JS, more specifically, Vue 3.0. To do this you can follow the documentation on
installing and using Vue CLI in the [official documentation](https://cli.vuejs.org/guide/)

Next you will need to create a new vue project and install the [vue-next CLI plugin](https://github.com/vuejs/vue-cli-plugin-vue-next).

## Download

```bash
npm install --save @black-kro/ui
```
or using yarn 
```bash
yarn add @black-kro/ui
```

## Usage
You can use the Kro UI library by either installing everything or using the à la carte method. The first method will give you access
to every component from the start and they will be globally accessible. The à la carte method will require to pick and choose which components you
want to use and you will have to option to register them globally or on an individual component basis.

```js
import { createApp } from 'vue';
import { KroUIPlugin } from '@black-kro/ui';

import App from './App.vue';
import '@black-kro/ui/dist/index.css';
import '@black-kro/ui/dist/themes/default.scss';

createApp(App)
    .use(KroUIPlugin, {
        icons: {}
    })
    .mount('#app');
```

## Icons
Kro UI uses Iconify along with [Purge Icons](https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons) to give you access to a library of over 5,000 open-source icons. [Purge Icons](https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons) will remove all of your unused
icons so you only ship the icons you need.

```bash
yarn add @iconify/iconify
```

```bash
yarn add -D vite-purge-icons
```

<up-next title="Theming" to="/theme" subtitle="Customize the theme of KroUI"></up-next>