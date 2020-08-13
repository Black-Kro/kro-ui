import { Plugin } from 'vue';
import { IconSymbol } from './composables/icons';
import { registerThemeWatcher } from './composables/useTheme';

import defaultIcons from './assets/icons';

import * as KroComponents from './components';
import * as KroDirectives from './directives';

interface KroUIOptions {
    icons: string[];
}

interface KroUIConfiguration {
    icons: string[],
    components: any,
};

export const KroUIBaseConfigurationPlugin = (): Plugin => ({
    install(app, config: KroUIConfiguration) {
        let icons = { ...defaultIcons };
        
        if (config && config.hasOwnProperty('icons'))
            icons = { ...icons, ...config.icons };

        if (config.components && Array.isArray(config.components))
            for (const key in config.components) {
                const component = config.components[key];

                if (component)
                    app.component(key, component);
            }


        app.provide(IconSymbol, icons);
        registerThemeWatcher();
    }
});

const KroUIPluginBase = (components: any, directives): Plugin => ({
    install(app, config: KroUIOptions) {

        let icons = { ...defaultIcons };

        if (config && config.hasOwnProperty('icons'))
            icons = { ...icons, ...config.icons };

        /**
         * Register Components
         */
        if (components)
            for (const key in components) {
                const component = components[key];

                if (component)
                    app.component(key, component);
            }

        /**
         * Register Directives
         */
        if (directives)
            for (const key in directives) {
                const directive = directives[key];

                if (directive)
                    app.directive(key, directive);
            }
                

        /**
         * Register Icons
         */
        app.provide(IconSymbol, icons);

        /**
         * Register the theme watcher
         */
        registerThemeWatcher();

    }
});

export const KroUIPlugin = KroUIPluginBase(KroComponents, KroDirectives);