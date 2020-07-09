import { ComponentMetadata } from '../../types';
import { RoutablePropsMetadata } from '../../composables/useRoutable';
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
        },

        ...RoutablePropsMetadata,
    ]
};