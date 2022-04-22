import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/github-graph.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
