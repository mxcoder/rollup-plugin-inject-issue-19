import rollupPluginInject from 'rollup-plugin-inject'

export default {
  input: 'index.js',
  output: {
      file: 'bundle.js',
      format: 'iife',
      globals: {
        'window': 'window',
        'document': 'document'
      }
  },
  external: ['window', 'document'],
  plugins: [
      rollupPluginInject({
          modules: {
              win: 'window',
              doc: 'document'
          }
      })
  ]
}
