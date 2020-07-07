import { ComponentMetadata } from '../types';

export { default as KroAlert } from './Alert.vue';

export const Metadata: ComponentMetadata = {
        title: 'KroMetadata',
        description: '',
        props: [
            {
                name: 'type',
                description: 'Defines the type of alert that is shown.',
                type: 'string',
                values: ['info', 'error', 'warning', 'success'],
                default: 'info',
            },
            {
                name: 'dismissible',
                description: 'Shows a close icon on the alert allowing the user to dismiss the alert.',
                type: 'bool',
                values: '-',
                default: 'false',
            },
            {
                name: 'icon',
                description: 'Sets the icon that is displayed on the alert.',
                type: 'string',
                values: '-',
                default: 'undefined',
            },
            {
                name: 'tag',
                description: 'Sets the root tage of the alert',
                type: 'string',
                values: '-',
                default: 'div',
            },
        ],
};