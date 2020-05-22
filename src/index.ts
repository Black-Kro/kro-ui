import * as components from './components';
import { applyKroUIPlugin } from './install';

// Import CSS
import './styles/main.scss';

export * from './components';

export default applyKroUIPlugin(components);