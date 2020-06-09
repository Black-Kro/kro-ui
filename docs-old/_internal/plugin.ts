import { Plugin, inject } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { DocumentationConfiguration, SidebarGroup } from './config.interface';

const ConfigurationSymbol = Symbol();

export const useDocConfiguration = () => {
    const config = inject<DocumentationConfiguration>(ConfigurationSymbol);

    return {
        title: config?.title,
        sidebar: config?.sidebar,
    }
}

export const KroDocumentationPlugin : Plugin = {
    install(app, config: DocumentationConfiguration) {
        app.provide(ConfigurationSymbol, config);

        const router = createRouter({
            history: createWebHistory(),
            routes: [
                ...config.routes
            ]
        });

        router.beforeEach((to, from, next) => {
            document.title = `${to.meta.title} | Kro UI`;
            next();
        });

        app.use(router);

    }
}
