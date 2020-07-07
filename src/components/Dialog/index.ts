import { ComponentMetadata } from '../types';

export { default as KroDialog } from './Dialog.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroDialog',
    description: 'Dialogs are used to display important information requiring the users immediate attention, often to confirm an action or to display an important error message, and should only be used when necessary.',
    props: [
        {
            name: 'v-model',
            description: 'Contorls the open state of the dialog',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'persistent',
            description: 'If enabled, the dialog can only be closed by the close button',
            type: 'bool',
            values: '-',
            default: 'false',
        },
    ],
    events: [
        {
            name: '@open',
            description: 'Fired when the dialog is opened',
            parameters: []
        },
        {
            name: '@close',
            description: 'Fired when the dialog is closed',
            parameters: [],
        }
    ],
    slots: [
        {
            name: '#activator',
            description: 'Slots the button that can be used to open the dialog',
            props: ['open', 'close', 'toggle'],
        },
        {
            name: '#title',
            description: 'Slot for the title of the dialog',
            props: ['open', 'close', 'toggle'],
        },
        {
            name: '#controls',
            description: 'Slot for the controls of the dialog',
            props: ['open', 'close', 'toggle'],
        },
        {
            name: '#default',
            description: 'Slot for the content of the dialog',
            props: [],
        },
    ],
};