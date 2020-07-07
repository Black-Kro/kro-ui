import { ComponentMetadata } from '../types';

export { default as KroNavigation } from './Navigation.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroNavigation',
    description: '',
    css: [
        {
            name: '--kro-navigation-width',
            description: 'Sets the width of the navigation menu',
            type: 'size',
            default: '275px',
        },
    ]
};