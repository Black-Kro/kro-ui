import { ComponentMetadata } from '../../types';

export { default as KroSpinner } from './Spinner.vue';

export const Metadata : ComponentMetadata = {
    title: 'KroSpinner',
    description: 'A loading indicator',
    css: [
        {
            name: '--kro-spinner-size',
            description: 'Sets the size of the spinner',
            type: 'size',
            default: '2.5rem',
        },
        {
            name: '--kro-spinner-thickness',
            description: 'Sets the thickness of the spinner',
            type: 'size',
            default: '0.35rem',
        },
        {
            name: '--kro-spinner-color',
            description: 'Sets the color of the spinner',
            type: 'size',
            default: '--kro-foreground',
        },
    ]
};