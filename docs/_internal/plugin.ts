import { Plugin, inject } from 'vue';

import CodeBlock from './components/CodeBlock.vue';
import { DocumentationConfiguration, SidebarGroup } from './config.interface';
import { RouteRecord, RouteRecordRaw } from 'vue-router';

const ConfigurationSymbol = Symbol();

export const useDocConfiguration = () => {
    const config = inject<DocumentationConfiguration>(ConfigurationSymbol);
    
    const sidebar = config?.sidebar.map(item => {
        return {
            title: item.title,
            path: item.path,
        }
    })

    return {
        title: config?.title,
        sidebar: sidebar,
    }
}

export const KroDocumentationPlugin : Plugin = {
    install(app, config: DocumentationConfiguration) {
        app.provide(ConfigurationSymbol, config);
    }
}


const flattenRoutes = (item: SidebarGroup[]) => {

    var outObj = []
    function addChildToOut(obj) {
        for (var i = 0; i < obj.length; i++) {
            var nObj = {};
            for (let [key, value] of Object.entries(obj[i])) {
                if (key == "children")
                    addChildToOut(value);
                else
                    nObj[key] = value;
    
            }
            // @ts-ignore
            outObj.push(nObj)
        }
    }

    addChildToOut(item);

    console.log(outObj);

    return outObj;

}

export const registerRoutes = (config: DocumentationConfiguration): RouteRecordRaw[] => {

    const sidebar = flattenRoutes(config.sidebar);

    const routes: RouteRecordRaw[] = sidebar.map(item => {
        return {
            // @ts-ignore
            path: item.path,
            // @ts-ignore
            component: item.component
        }
    });



    return routes;

}