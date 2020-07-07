import { ComponentMetadata } from '../types';

export { default as KroButton } from './Button.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroButton',
    description: 'A styled button with added functionality',
    props: [
        {
            name: 'loading',
            description: '',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'href',
            description: '',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'target',
            description: '',
            type: 'string',
            values: ['_blank', '_self', '_parent', '_top'],
            default: '_blank',
        },
        {
            name: 'to',
            description: '',
            type: 'string | object',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'type',
            description: 'The type of the button',
            type: 'string',
            values: ['button', 'reset', 'submit'],
            default: 'button',
        },
        {
            name: 'primary',
            description: 'Applies a style to the button to indicate that it is a primary button',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'outline',
            description: 'Give the button an outline style',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'raised',
            description: 'Apply a shadow to the button',
            type: 'string',
            values: '-',
            default: 'false',
        },
        {
            name: 'icon',
            description: 'Adds an icon to the button',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
    ]
};