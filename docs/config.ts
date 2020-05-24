import { DocumentationConfiguration } from './_internal/config.interface';

import Home from './app/home/index.md';

import Components from './app/components/index.md';
import Buttons from './app/components/Buttons.md';

export default {

    title: 'Kro UI',
    description: 'Documentation for',
    sidebar: [
        {
            title: 'Home',
            path: '/',
            component: Home,
        },
        {
            title: 'Components',
            path: '/components',
            component: Components,
            children: [
                {
                    title: 'Buttons',
                    path: '/components/buttons',
                    component: Buttons
                }
            ]
        }
    ]
    

} as DocumentationConfiguration;