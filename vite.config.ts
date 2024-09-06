import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  root: resolve(__dirname, 'src/renderer'),
  resolve: {
    alias: {
      '@renderer': resolve(__dirname, 'src/renderer/src')
    }
  },
  server: {
    host: '0.0.0.0', // 允许从任何网络接口访问
    port: 9899, // 使用的端口
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
    outDir: resolve(__dirname, 'dist/renderer'), // 构建输出目录
    rollupOptions: {
      input: resolve(__dirname, 'src/renderer/index.html') // HTML 文件入口
    }
  },
  plugins: [react()]
})
