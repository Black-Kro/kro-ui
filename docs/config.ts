import { DocumentationConfiguration } from './_internal/config.interface';

import Home from './app/home/index.md';

import Components from './app/components/index.md';
import Buttons from './app/components/Buttons.md';

export default {

    title: 'Kro UI',
    description: 'Documentation for',


    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/components',
            component: Components,
        },
        {
            path: '/components/buttons',
            component: Buttons,
        }
    ],

    sidebar: [
        {
            title: 'Introduction',
            path: '/',
        },
        {
            title: 'Components',
            path: '/components',
            children: [
                {
                    title: 'Buttons',
                    path: '/components/buttons',
                }
            ]
        }
    ]
    

} as DocumentationConfiguration;