import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      views: path.resolve(__dirname, './src/views'),
      src: path.resolve(__dirname, './src'),
      utils: path.resolve(__dirname, './src/utils'),
      hooks: path.resolve(__dirname, './src/hooks'),
      assets: path.resolve(__dirname, './src/assets'),
      config: path.resolve(__dirname, './src/config'),
      lib: path.resolve(__dirname, './src/lib'),
      api: path.resolve(__dirname, './src/api'),
      theme: path.resolve(__dirname, './src/theme'),
      context: path.resolve(__dirname, './src/context'),
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
  },
})
