import { Plugin, Component } from 'vue';

export const RegisterComponents: Plugin = {
    install(app, components) {
        if (components) {
            for (const key in components) {
                const component = components[key];

                if (component)
                    app.component(key, component);
            }
        }
    }
};

export const componentPropsExtractor = (component: Component) => {

    return Object.keys(component.props).map(key => {
        const prop = component.props[key];

        console.log(key, component.props[key]);

        return {
            name: key,
            required: !!prop.required,
            type: prop.type ? prop.type?.name : prop.name,
            default: prop.default || 'undefined',
        }

    });
}