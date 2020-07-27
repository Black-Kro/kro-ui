import { ComponentMetadata } from '../../types';

export { default as KroLayout } from './Layout.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroLayout',
    description: '',
    props: [
        {
            name: 'responsiveWidth',
            default: '768',
            description: 'The width at which the drawer is hidden',
            type: 'number',
            values: [],
        },
        {
            name: 'temporary',
            default: 'false',
            description: 'Hides the drawer by default',
            type: 'bool',
            values: []
        },
        {
            name: 'clipToolbar',
            default: 'false',
            description: 'Shifts the toolbar to the right to make room for the drawer',
            type: 'bool',
            values: []
        },
        {
            name: 'mini',
            default: 'false',
            description: 'Makes the drawer smaller',
            type: 'bool',
            values: []
        },
        {
            name: 'v-model:is-drawer-open',
            default: 'true or false',
            description: 'Controls the open state of the drawer',
            type: 'bool',
            values: []
        },
        {
            name: 'v-model:is-drawer-hidden',
            default: 'true or false',
            description: 'Indicates if the drawer is in a default hidden state',
            type: 'bool',
            values: []
        },
    ],
    slots: [
        {
            name: '#drawer',
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