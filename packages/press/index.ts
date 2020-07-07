import { Plugin } from 'vue';
import { createKroPressRouter } from './router';

import KroUI from '@lib';

import { ActiveHeaderLinks } from './plugins';

import { ConfigurationSymbol } from './composables/useConfiguration';
import type { KroPressPluginOptions } from './types/options.interface';
export type { KroPressPluginOptions } from './types/options.interface';

import * as PressComponents from './components';

export { useConfiguration } from './composables/useConfiguration';

export const KroPressPlugin: Plugin = {
    install(app, options: KroPressPluginOptions) {

        app.provide(ConfigurationSymbol, options);
     
        const router = createKroPressRouter(options.routes);

        router.beforeEach((to, from, next) => {
            document.title = `${to.meta.title} | ${options.title}`;
            next();
        });

        // Register Custom Components
        const components = {
            ...PressComponents,
            ...options.components,
        };

        for (const name in components) {
            const component = components[name];

            if (component)
                app.component(name, component);
        }

        app
            .use(ActiveHeaderLinks, { router })
            .use(KroUI, {
                icons: {
                    'palette': 'M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z',
                    'package-down': 'M5.12,5L5.93,4H17.93L18.87,5M12,17.5L6.5,12H10V10H14V12H17.5L12,17.5M20.54,5.23L19.15,3.55C18.88,3.21 18.47,3 18,3H6C5.53,3 5.12,3.21 4.84,3.55L3.46,5.23C3.17,5.57 3,6 3,6.5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V6.5C21,6 20.83,5.57 20.54,5.23Z',
                    'flash': 'M7,2V13H10V22L17,10H13L17,2H7Z',
                    'github': 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z',
                    'account': 'M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z',
                }
            })
            .use(router);

    }
};