import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default {
  input: './mod.js',
  output: {
    file: pkg.main,
    sourcemap: true,
    inlineDynamicImports: true,
    intro: 'var global = typeof self !== undefined ? self : this;',
  },
  plugins: [
    alias({
      // Resolve the translations from the main package
      entries: [{ find: 'i18n', replacement: 'converse.js/src/i18n' }],
    }),
    resolve(),
    commonjs(),
    json(),
    production && terser(),
  ],
}
