import { ComponentMetadata } from '../../types';

export { default as KroListItem } from './ListItem.vue';
import { RoutablePropsMetadata } from '../../composables/useRoutable';

export const Metadata: ComponentMetadata = {
    title: 'KroListItem',
    description: '',
    props: [
        {
            name: 'tag',
            description: '',
            type: 'string',
            values: '-',
            default: 'div',
        },

        ...RoutablePropsMetadata,
    ],
    slots: [
        {
            name: '#icon',
            description: 'Item icon slot',
            props: []
        },
        {
            name: '#subtitle',
            description: 'Item subtitle slot',
            props: []
        },
        {
            name: '#action',
            description: 'Action on the right side of the item',
            props: []
        },
        {
            name: '#default',
            description: 'Main text of the item',
            props: []
        },
    ]
}