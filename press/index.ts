import { Plugin } from 'vue';
import { createKroPressRouter } from './router';

import KroUI from '@lib';

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
            .use(KroUI, {
                icons: {
                    
                }
            })
            .use(router);

    }
};