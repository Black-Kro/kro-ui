<p align="center">
    <img width="400" src="./src/assets/logo.png">
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@black-kro/ui"><img src="https://badge.fury.io/js/%40black-kro%2Fui.svg" alt="npm version" height="18"></a>
<a href="https://app.netlify.com/sites/peaceful-lamarr-c91179/deploys"><img src="https://api.netlify.com/api/v1/badges/22371d16-1732-46f6-8adc-ad72d049066f/deploy-status" alt="npm version" height="18"></a>
</p>

<h2 align="center">Getting Started</h2>
Kro UI is an MIT-licensed open source Vue UI library for building web applications.

[Official Documentation & Demos](https://ui.black-kro.dev)

## Install Kro UI
To install Kro UI you will either need to have NPM or Yarn installed.

Install via NPM
```bash
npm i --save @black-kro/ui
```

Install via Yarn
```bash
yarn add @black-kro/ui
```


## Using Kro UI
```ts
import { createApp } from 'vue';
import App from 'App.vue';

// Import Kro UI Library
import { KroUIPlugin } from '@black-kro/ui';

// Base Styles and theme for Kro UI
import '@black-kro/ui/dist/kro-ui.common.css';
import '@black-kro/ui/dist/themes/default.scss';

// Create New Vue App
createApp(App)
    .use(KroUIPlugin, {
        icons: {
            'menu': 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
        }
    })
    .mount('#app');
```
## Contributing
Feel free to contirbue to the project. You can request new features by creating an issue or you can contribute your own features by creating a pull request. Before working on a feature it is a good idea to open an issue to ensure the feature fits the project.

Bug reports are also appericated. When reporting a bug try to provide some information that can be used to help determine the issue. Things like erros messages, package version, and relevent code would be good things to include.

## Development Setup
You will need to install the latest version of Node.js before getting started.

After cloning the repo, run:
```bash
$ npm install
```

### Commonly used NPM scripts.
```bash
# watch and auto re-build docs
$ npm run serve

# Build library for produciton
$ npm run build

# Build docs for production
$ npm run docs
```

### Project Structure
- `build`: Contains build scripts for the project and docs.
- `dist`: Contains built files for distribution.
- `docs`: Contains docs for the UI library.
- `src`: Contains the source code for the UI components.
    - `components`: Contains folders which each represent a different component.
    - `styles`: Contains the base styles needed for the Kro UI library.

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, Jacob Clevenger