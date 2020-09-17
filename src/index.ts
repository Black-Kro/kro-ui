/**
 * Import Base Styles
 */
import './styles/main.scss';
import '@purge-icons/generated'

export { KroUIPlugin, KroUIBaseConfigurationPlugin } from './install';
export { useTheme, useIcons, useDialog } from './composables';

export * from './components';
export * as Metadata from './components/metadata';
