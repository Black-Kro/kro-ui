import { ComponentMetadata } from '../../types';

export { default as KroSurface } from './Surface.vue';

export const Metadata : ComponentMetadata = {
    title: 'KroSurface',
    description: 'A surface that contains content and can have a label',
    props: [
        {
            name: 'padded',
            description: 'Adds a padding to the container.',
            type: 'bool',
            values: '-',
            default: 'true'
        },
        {
            name: 'raised',
            description: 'Adds a shadow to the container.',
            type: 'bool',
            values: '-',
            default: 'true'
        },
        {
            name: 'outline',
            description: 'Adds an outline to the container.',
            type: 'bool',
            values: '-',
            default: 'false'
        },
        {
            name: 'icon',
            description: 'Adds an icon to the container.',
            type: 'bool',
            values: '-',
            default: 'undefined'
        },
        {
            name: 'label',
            description: 'Adds a label to the container.',
            type: 'string',
            values: '-',
            default: 'undefined'
        },
    ],
    css: [
        {
            name: '--kro-surface-background',
            description: '',
            type: 'color',
            default: '--kro-background-secondary',
        },
        {
            name: '--kro-surface-outline',
            description: 'Sets the outline color of and outlined container',
            type: 'color',
            default: '--kro-divider',
        },
        {
            name: '--kro-surface-shadow',
            description: 'Sets the shadow of a raised container',
            type: 'shadow',
            default: '--kro-shadow',
        },
    ]
};