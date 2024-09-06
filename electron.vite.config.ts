import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 9899,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/image1': {
          target: 'https://p1.music.126.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/image1/, '')
        },
        '/image2': {
          target: 'https://p2.music.126.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/image2/, '')
        }
      }
    },
    build: {
      outDir: 'dist/renderer', // 构建输出目录
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/renderer/index.html')
        }
      }
    },
    plugins: [react()]
  }
})
