import { ComponentMetadata } from '../../types'

export { default as KroSwitch } from './Switch.vue'

export const Metadata: ComponentMetadata = {
  title: 'KroSwitch',
  description: '',
  props: [
    {
      name: 'v-model',
      description: 'The value of the switch',
      type: 'bool',
      values: '-',
      default: 'undefined',
    },
  ],
  css: [
    {
      name: '--kro-switch-track-background',
      description: 'The color of the track background.',
      type: 'color',
      default: '--kro-background-secondary',
    },
    {
      name: '--kro-switch-track-active-background',
      description: 'The track color when the switch is set to true.',
      type: 'color',
      default: '--kro-primary-darken',
    },
    {
      name: '--kro-switch-knob-color',
      description: 'The color of the switch knob.',
      type: 'color',
      default: '--kro-primary',
    },
    {
      name: '--kro-switch-knob-shadow',
      description: 'The shadow of the switch knob.',
      type: 'shadow',
      default: '--kro-shadow',
    },
  ],
}
