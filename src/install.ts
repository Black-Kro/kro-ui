import { App } from 'vue';

export const applyKroUIPlugin = (components: any) => (app: App) =>  {

    /**
     * Register All App Components
     */
    if (components) {
        for (const key in components) {
            const component = components[key];

            if (component) 
                app.component(key, component);
        }
    }


}
