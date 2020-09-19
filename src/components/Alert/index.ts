import type { ComponentMetadata } from '../../types'

export { default as KroAlert } from './Alert.vue'

export const Metadata: ComponentMetadata = {
  title: 'KroAlert',
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
    {
      name: 'outline',
      description: 'Give the alert an outline style.',
      type: 'bool',
      values: '-',
      default: 'false',
    },
  ],
  events: [
    {
      name: '@dismissed',
      description: 'Fires when the alert is dismissed',
      parameters: [],
    },
    {
      name: '@show',
      description: 'Fires when the alert is shown after being dismissed',
      parameters: [],
    },
  ],
  slots: [
    {
      name: '#default',
      description: 'Slot for the text content of the alert.',
      props: [],
    },
  ],
}
