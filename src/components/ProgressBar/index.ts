import { ComponentMetadata } from '../../types';

export { default as KroProgressBar } from './ProgressBar.vue';

export const Metadata: ComponentMetadata = {
    title: 'KroProgressBar',
    description: '',
    props: [
        {
            name: 'stream',
            description: 'Display a speical style to the progress bar to indicate it is a stream',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'indeterminate',
            description: 'Display a special style to the progress bar to indicate that is indeterminate.',
            type: '',
            values: '-',
            default: 'false',
        },
        {
            name: 'rounded',
            description: 'Applies a rounded style to the progress bar.',
            type: 'bool',
            values: '-',
            default: 'true',
        },
        {
            name: 'value',
            description: 'Sets the value of the progress bar.',
            type: 'number',
            values: '-',
            default: '0',
        },
        {
            name: 'bufferValue',
            description: 'Sets the buffer value of the progress bar.',
            type: 'number',
            values: '-',
            default: '100',
        },
    ],
    css: [

    ],
}