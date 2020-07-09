import { ComponentMetadata } from '../../types';

export { default as KroMenu } from './Menu.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroMenu',
    description: '',
    props: [
        {
            name: 'offsetX',
            description: 'Offsets the menu horizontally so it is not covering the activator element.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'offsetY',
            description: 'Offsets the menu vertically so it is not coverting the activator element',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'left',
            description: 'Positions the menu to open to the left of the activator.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'right',
            description: 'Positions the menu to open to the right of the activator.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'top',
            description: 'Positions the menut to open above the activator.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'bottom',
            description: 'Positions the element to open below the activator.',
            type: 'bool',
            values: '-',
            default: 'false',
        }
    ],
    slots: [
        {
            name: '#default',
            description: '',
            props: [],
        }
    ],
    css: [
        {
            name: '--kro-menu-min-width',
            description: '',
            type: 'size',
            default: '200px',
        },
        {
            name: '--kro-menu-max-width',
            description: '',
            type: 'size',
            default: '300px',
        },
    ]
}