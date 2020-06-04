import vuePlugin from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
    },
    external: ['vue'],
    plugins: [
        typescript({
            rollupCommonJSResolveHack: false,
            clean: true,
        }),
        vuePlugin({
            target: 'browser',
            preprocessStyles: true,
        }),
        postcss({
            extract: true,
            minimize: true,
            use: ['sass']
        }),
        buble({
            objectAssign: 'Object.assign'
        }),
        terser(),
    ]
}