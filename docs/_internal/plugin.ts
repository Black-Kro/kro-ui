import { Plugin, inject } from 'vue';

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
    }
}

// export const registerRoutes = (config: DocumentationConfiguration): RouteRecordRaw[] => {

//     const sidebar = flattenRoutes(config.sidebar);

//     const routes: RouteRecordRaw[] = sidebar.map(item => {
//         return {
//             // @ts-ignore
//             path: item.path,
//             // @ts-ignore
//             component: item.component
//         }
//     });



//     return routes;

// }