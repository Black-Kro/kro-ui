import { ComponentMetadata } from '../types';

export { default as KroButton } from './Button.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroButton',
    description: 'A styled button with added functionality',
    props: [
        {
            name: 'loading',
            description: 'Displays a loading indicator over the button',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'href',
            description: 'Convers the button into an external link',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'target',
            description: 'Sets the target attribute if the button is a link.',
            type: 'string',
            values: ['_blank', '_self', '_parent', '_top'],
            default: '_blank',
        },
        {
            name: 'to',
            description: 'Converts the button into a vue-router `router-link` component',
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
        {
            name: 'hideExternalIcon',
            description: 'Hides the external link icon for buttons that are links.',
            type: 'bool',
            values: '-',
            default: 'false',
        }
    ]
};