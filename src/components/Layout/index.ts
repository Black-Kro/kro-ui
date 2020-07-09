import { ComponentMetadata } from '../../types';

export { default as KroLayout } from './Layout.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroLayout',
    description: '',
    props: [
        {
            name: 'fixed',
            description: 'Set to true when the layout is the main page layout',
            type: 'bool',
            values: '-',
            default: 'false'
        }
    ],
    slots: [
        {
            name: '#navigation',
            description: 'Contains the sidebar navigation of the page',
            props: [],
        },
        {
            name: '#toolbar',
            description: 'Contains the toolbar of the page',
            props: [],
        },
        {
            name: '#footer',
            description: 'Contains the footer content of the page',
            props: [],
        },
        {
            name: '#default',
            description: 'Contains the contents of the page',
            props: [],
        }
    ],
}