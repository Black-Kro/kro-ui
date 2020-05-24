<p align="center">
    <img width="400" src="./src/assets/logo.png">
</p>

[![npm version](https://badge.fury.io/js/kro-ui.svg)](https://www.npmjs.com/package/kro-ui)

[![Netlify Status](https://api.netlify.com/api/v1/badges/22371d16-1732-46f6-8adc-ad72d049066f/deploy-status)](https://app.netlify.com/sites/peaceful-lamarr-c91179/deploys)

Kro UI is a Vue UI library that is meant to be used for all Kro apps, but is free to be used by anyone. The app currently provides the following components with more coming soon. Official docs will also be coming soon.

| Component     | Name                  | Status        
| ------------- |:---------------------:|:-------------:
| Button        | `<kro-button>`        | Alpha 
| Button Group  | `<kro-button-group>`  | Alpha      
| Icon          | `<kro-icon>`          | Alpha      
| Icon Button   | `<kro-icon-button>`   | Alpha      
| Spinner       | `<kro-spinner>`       | Alpha      
| Switch        | `<kro-switch>`        | Alpha      
| Textfield     | `<kro-textfield>`     | Alpha      
| Toolbar       | `<kro-toolbar>`       | Alpha      

## Install Kro UI
```
npm i --save kro-ui
```

## Using Kro UI
```ts

import { createApp } from 'vue';
import App from 'your-app-component';

// Import Kro UI Library
import KroUI from 'kro-ui';

// Create New Vue App
createApp(App)
    .use(KroUI, {

        // Register Your Icons Here
        icons: [
            // Icons use SVG path definitions
            'menu': 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
        ]

    })
    .mount('#app');

```
