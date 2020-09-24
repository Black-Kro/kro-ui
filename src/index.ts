/**
 * Import Base Styles
 */
import './styles/main.scss'

export { KroUIPlugin, KroUIBaseConfigurationPlugin } from './install'
export { useTheme, useDialog } from './composables'

export * from './components'
export * as Metadata from './components/metadata'

/**
 * This SCSS import should be below the components otherwise it will cause some problems.
 */
// eslint-disable-next-line
import './styles/tailwind.scss'