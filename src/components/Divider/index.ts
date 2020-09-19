import { ComponentMetadata } from '../../types'

export { default as KroDivider } from './Divider.vue'

export const Metadata: ComponentMetadata = {
  title: 'KroDivider',
  description: '',
  props: [
    {
      name: 'vertical',
      description: 'Makes the divider a vertical divider',
      type: 'bool',
      values: '-',
      default: 'false',
    },
  ],
}
