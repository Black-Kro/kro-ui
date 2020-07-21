/**
 * This file is just meant to generate types since Vite does not output type definition files by deafult.
 */

import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';
import clean from 'rollup-plugin-clean';
import path from 'path';


export default {
    input: 'src/index.ts',
    output: [
        {
            format: 'esm',
            file: 'dist/index.esm.js'
        },
        {
            format: 'cjs',
            file: 'dist/index.common.js'
        },
    ],
    external: ['vue'],
    plugins: [
        clean(),
        typescript({
            useTsconfigDeclarationDir: true,
            rollupCommonJSResolveHack: true,
            tsconfigOverride: {
                emit: false,
                emitDeclarationOnly: true,
            }
        }),
        vue({
            target: 'browser',
            preprocessStyles: true,
        }),
        postcss({
            extract: path.resolve('dist/index.css'),
            minimize: true,
            use: ['sass']
        }),
        buble({ objectAssign: 'Object.assign' }),
        terser(),
        copy({
            targets: [{ src: 'src/styles/themes', dest: 'dist/' }]
        })
    ]
}