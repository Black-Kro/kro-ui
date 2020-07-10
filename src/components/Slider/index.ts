import { ComponentMetadata } from '../../types';

export { default as KroSlider } from './Slider.vue';

export const Metadata : ComponentMetadata = {
    title: 'KroSlider',
    description: '',
    props: [
        {
            name: 'v-model',
            description: 'The value of the slider',
            type: 'number',
            values: '-',
            default: 'undefined'
        },
        {
            name: 'disabled',
            description: 'Disables the slider',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'steps',
            description: 'Sets the step amount for each tick',
            type: 'number',
            values: '-',
            default: '1',
        },
        {
            name: 'ticks',
            description: 'Display the ticks on the slider',
            type: 'bool',
            values: '-',
            default: 'false',
        },
        {
            name: 'min',
            description: 'Set the min value of the slider',
            type: 'number',
            values: '-',
            default: '0',
        },
        {
            name: 'max',
            description: 'Set the max value of the slider',
            type: 'number',
            values: '-',
            default: '100',
        },
    ],
    slots: [
        {
            name: '#thumb',
            description: 'A slot to replace the default value of the thumb.',
            props: ['value']
        }
    ],
    css: [
        {
            name: '--kro-slider-tick-color',
            description: 'The color of the tick marks on the slider.',
            type: 'color',
            default: 'rgba(0, 0, 0, .24)',
        },
        {
            name: '--kro-slider-track-color',
            description: 'The color of the slider track.',
            type: 'color',
            default: '--kro-background-secondary',
        },
        {
            name: '--kro-slider-progress-color',
            description: 'The color of the progress bar on the track.',
            type: 'color',
            default: '--kro-primary',
        },
        {
            name: '--kro-slider-knob-color',
            description: 'The color of the knob on the slider.',
            type: 'color',
            default: '--kro-primary-lighten',
        },
        {
            name: '--kro-slider-thumb-foreground',
            description: 'The foreground color of the thumb.',
            type: 'color',
            default: '--kro-primary-foreground',
        },
        {
            name: '--kro-slider-thumb-background',
            description: 'The background color of the thumb.',
            type: 'color',
            default: '--kro-primary',
        },
    ],
}