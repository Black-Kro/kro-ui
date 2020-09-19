/**
 * Import Base Styles
 */
import './styles/main.scss'

export { KroUIPlugin, KroUIBaseConfigurationPlugin } from './install'
export { useTheme, useDialog } from './composables'

export * from './components'
export * as Metadata from './components/metadata'

// eslint-ignore-next-line
import './styles/tailwind.scss'