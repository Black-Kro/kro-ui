# Installation
Before using Kro UI you will need to be using the latest version of Vue JS, more specifically, Vue 3.0. To do this you can follow the documentation on
installing and using Vue CLI in the [official documentation](https://cli.vuejs.org/guide/)

Next you will need to create a new vue project and install the [vue-next CLI plugin](https://github.com/vuejs/vue-cli-plugin-vue-next).

## Download

```bash
npm install --save kro-ui
```

## Usage
```typescript
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

## Related
<press-article-link title="Theming" to="/themes" subtitle="Customize the theme of KroUI"></press-article-link>