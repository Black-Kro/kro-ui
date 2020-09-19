import { ComponentMetadata } from '../../types'

export { default as KroAvatar } from './Avatar.vue'

export const Metadata: ComponentMetadata = {
  title: 'KroAvatar',
  description: '',
  props: [
    {
      name: 'src',
      description: 'Sets the image of the avatar',
      type: 'string',
      values: '-',
      default: 'undefined',
    },
    {
      name: 'color',
      description: 'Sets the color of the avatar.',
      type: 'string',
      values: '-',
      default: 'undefined',
    },
    {
      name: 'small',
      description: 'Makes the avatar smaller.',
      type: 'bool',
      values: '-',
      default: 'false',
    },
    {
      name: 'large',
      description: 'Makes the avatar larger.',
      type: 'bool',
      values: '-',
      default: 'false',
    },
  ],
  css: [
    {
      name: '--kro-avatar-size',
      description: '',
      default: '3rem',
      type: 'CSS Size Unit',
    },
    {
      name: '--kro-avatar-radius',
      description: '',
      default: '50%',
      type: 'CSS Size Unit',
    },
  ],
}
