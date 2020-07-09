import { ComponentMetadata } from '../../types';

export { default as KroIcon } from './Icon.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroIcon',
    description: 'Display an SVG icon',
    props: [
        {
            name: 'icon',
            description: 'The name of the icon to display',
            type: 'string',
            values: '-',
            default: 'undefined',
        }
    ],
    css: [
        {
            name: '--kro-icon-size',
            description: 'The size of the icon',
            type: 'size',
            default: '1.5rem'
        }
    ],
}