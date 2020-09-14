# Installation
Before using Kro UI you will need to be using the latest version of Vue JS, more specifically, Vue 3.0. To do this you can follow the documentation on
installing and using Vue CLI in the [official documentation](https://cli.vuejs.org/guide/)

Next you will need to create a new vue project and install the [vue-next CLI plugin](https://github.com/vuejs/vue-cli-plugin-vue-next).

## Download

```bash
npm install --save @black-kro/ui
```

## Usage
You can use the Kro UI library by either installing everything or using the à la carte method. The first method will give you access
to every component from the start and they will be globally accessible. The à la carte method will require to pick and choose which components you
want to use and you will have to option to register them globally or on an individual component basis.

### Everything

```js
import { createApp } from 'vue';

import App from './App.vue';

// Import Kro UI Library
import KroUI from '@black-kro/ui';

// Base Styles for Kro UI
import '@black-kro/ui/dist/kro-ui.common.css';

// If using the Nord theme, import it from the package.
import '@black-kro/ui/dist/themes/nord.scss';

createApp(App)
    .use(KroUI, {
        icons: {
            // Register Icons here
        }
    })
    .mount('#app');
```

### À la carte
```js
import { createApp } from 'vue';

import App from './App.vue';

// Import Kro UI Library
import { ConfigureKroUIPluign, KroApp } from '@black-kro/ui';

// Base Styles for Kro UI
import '@black-kro/ui/dist/kro-ui.common.css';

// If using the Nord theme, import it from the package.
import '@black-kro/ui/dist/themes/nord.scss';

createApp(App)
    .use(KroUI, {
        icons: {
            // Register Icons here
        },
        components: {
            KroApp
        }
    })
    .mount('#app');
```

<up-next title="Theming" to="/theme" subtitle="Customize the theme of KroUI"></up-next>