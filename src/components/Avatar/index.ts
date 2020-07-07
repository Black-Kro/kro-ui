import { ComponentMetadata } from '../types';

export { default as KroAvatar } from './Avatar.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroAvatar',
    description: '',
    props: [
        {
            name: 'src',
            description: '',
            type: 'string',
            values: '-',
            default: 'undefined',
        },
    ],
    css: [
        {
            name: '--kro-avatar-size',
            description: '',
            default: '3rem',
            type: 'CSS Size Unit'
        },
        {
            name: '--kro-avatar-radius',
            description: '',
            default: '50%',
            type: 'CSS Size Unit'
        },
    ]
};
