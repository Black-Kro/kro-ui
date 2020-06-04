import * as components from './components';
import { KroUIPlugin } from './install';

// Import CSS
import './styles/main.scss';

export * from './components';
export * from './composables';

export default KroUIPlugin(components);