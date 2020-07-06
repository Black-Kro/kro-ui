import { Plugin } from 'vue';
import { IconSymbol } from './composables/icons';
import { registerThemeWatcher } from './composables/useTheme';

import defaultIcons from './assets/icons';

interface KroUIOptions {
    icons: string[];
}

interface KroUIConfiguration {
    icons: string[],
    components: any,
};

export const ConfigureKroUIPluign = (): Plugin => ({
    install(app, config: KroUIConfiguration) {
        let icons = { ...defaultIcons };
        
        if (config.icons)
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

export const KroUIPlugin = (components: any): Plugin => ({
    install(app, config: KroUIOptions) {

        let icons = { ...defaultIcons };

        if (config.icons)
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
         * Register Icons
         */
        app.provide(IconSymbol, icons);

        /**
         * Register the theme watcher
         */
        registerThemeWatcher();

    }
});
