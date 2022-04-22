import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/github-graph.ts',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    }
  }
})
