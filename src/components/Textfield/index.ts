import { ComponentMetadata } from '../types';

export { default as KroTextfield } from './Textfield.vue';

export const Metadata : ComponentMetadata = {
    title: 'KroTextfield',
    description: '',
    props: [
        {
            name: 'v-model',
            description: 'The value of the textfield',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'label',
            description: 'The textfield label',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'type',
            description: 'The textfield type',
            type: 'string',
            values: 'text | tel | email | password | url | search',
            default: 'text',
        },
        {
            name: 'required',
            description: 'Marks the textfield as required',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'disabled',
            description: 'Marks the textfield as disabled',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'multiline',
            description: 'Makes the textfield into a textarea than can support multiple lines.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'readonly',
            description: 'Marks the textfield as readonly',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'autofocus',
            description: 'Autofocuses the textfield when the component loads.',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'min',
            description: 'Sets the min value if the textfield is a nubmer input',
            type: 'number',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'max',
            description: 'Sets the max value if the textfield is a nubmer input',
            type: 'number',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'maxlength',
            description: 'Sets the max amount of characters that the textfield will accept',
            type: 'number',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'name',
            description: 'Sets the name of the textfield.',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'id',
            description: 'Sets the id of the textfield',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'autoresize',
            description: 'If the textfield is multiline, then this will autoresize the textfield vertically as the user types.',
            type: 'bool',
            values: '-',
            default: 'true',
        },
    ],
    css: [
        {
            name: '--kro-textfield-border-color',
            description: 'The border color of the textifled',
            type: 'color',
            default: '--kro-divider',
        },
        {
            name: '--kro-textifled-focused-border-color',
            description: 'The border color of the textifled when it is focused',
            type: 'color',
            default: '--kro-primary',
        },
    ]
}