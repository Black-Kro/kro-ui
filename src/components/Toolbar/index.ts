import { ComponentMetadata } from '../../types';

export { default as KroToolbar } from './Toolbar.vue';

export const Metadata : ComponentMetadata = {
    title: 'KroToolbar',
    description: '',
    props: [
        {
            name: 'small',
            description: 'Makes the height of the toolbar smaller.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'padded',
            description: 'Adds padding to the toolbar.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'raised',
            description: 'Adds a shadow to the toolbar.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
    ],
    css: [
        {
            name: '--kro-toolbar-height',
            description: 'The height of the toolbar',
            type: 'size',
            default: '4rem',
        },
        {
            name: '--kro-toolbar-background',
            description: 'The background color of the toolbar',
            type: 'color',
            default: '--kro-background-secondary',
        },
        {
            name: '--kro-toolbar-shadow',
            description: 'The shadow of a raised toolbar',
            type: 'color',
            default: '--kro-background-shadow',
        },
    ]
};