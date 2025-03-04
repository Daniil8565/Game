// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// import path from 'path'
// dotenv.config()

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, 'ssr.tsx'),
//       name: 'Client',
//       formats: ['cjs'],
//     },
//     rollupOptions: {
//       output: {
//         dir: 'dist/ssr-dist',
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })
// выше всё работало _________________

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist/ssr-dist',
        entryFileNames: 'client.cjs', // Явно задаём имя для сервера
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
