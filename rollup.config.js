import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'converse-headless.mjs',
  output: {
    dir: 'dist',
    sourcemap: true,
    intro: 'var global = typeof self !== undefined ? self : this;',
  },
  plugins: [nodeResolve(), commonjs(), json(), terser()],
}
