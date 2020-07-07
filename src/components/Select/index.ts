import { ComponentMetadata } from '../types';

export { default as KroSelect } from './Select.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroSelect',
    description: 'A styled select component.',
    props: [
        {
            name: 'label',
            description: '',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'required',
            description: '',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'disabled',
            description: '',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'readonly',
            description: '',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'autofocus',
            description: '',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'name',
            description: '',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
        {
            name: 'id',
            description: '',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
    ]
}