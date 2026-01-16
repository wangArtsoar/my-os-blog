// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 将 'my-os-blog' 替换为你的仓库名
export default defineConfig({
  plugins: [react()],
  base: '/my-os-blog/', 
})