import { Plugin } from 'vue';
import { IconSymbol } from './composables/icons';
import defaultIcons from './assets/icons';

interface KroUIOptions {
    icons: string[];
}

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

    }
});
