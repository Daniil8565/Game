// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// import path from 'path'
// dotenv.config()

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     port: Number(process.env.CLIENT_PORT) || 3000,
//   },
//   define: {
//     __SERVER_PORT__: process.env.SERVER_PORT || 3001,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })

// тут работало
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// import path from 'path'
// import { defineConfig } from 'vite'

// dotenv.config()

// export default defineConfig({
//   server: {
//     port: Number(process.env.CLIENT_PORT) || 3000,
//   },
//   define: {
//     __SERVER_PORT__: process.env.SERVER_PORT || 3001,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true,
//     ssr: true, // Включаем сборку SSR
//     rollupOptions: {
//       input: 'src/ssr.tsx', // Точка входа для SSR
//       output: {
//         format: 'cjs', // Формат для Node.js
//         dir: 'dist/ssr-dist',
//       },
//     },
//   },
// })

// ____________________________________

// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// import path from 'path'
// import { defineConfig } from 'vite'

// dotenv.config()

// export default defineConfig({
//   server: {
//     port: Number(process.env.CLIENT_PORT) || 3000,
//   },
//   define: {
//     __SERVER_PORT__: process.env.SERVER_PORT || 3001,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: 'src/main.tsx', // Точка входа для клиента
//         ssr: 'src/ssr.tsx', // Точка входа для SSR
//       },
//       output: {
//         dir: 'dist',
//         format: 'es', // Используем ES для клиента, CJS для SSR
//         entryFileNames: '[name].js',
//         chunkFileNames: 'assets/[name]-[hash].js',
//         manualChunks: undefined, // Отключаем автоматическое разделение чанков для SSR
//       },
//     },
//   },
// })

// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'
// import path from 'path'
// import { defineConfig } from 'vite'

// dotenv.config()

// export default defineConfig({
//   server: {
//     port: Number(process.env.CLIENT_PORT) || 3000,
//   },
//   define: {
//     __SERVER_PORT__: process.env.SERVER_PORT || 3001,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   build: {
//     outDir: 'dist',
//     emptyOutDir: true,
//     ssr: true, // Включаем сборку SSR
//     rollupOptions: {
//       input: 'src/ssr.tsx', // Указываем точку входа для SSR
//       output: {
//         format: 'cjs', // Формат для Node.js
//         dir: 'dist/ssr-dist',
//       },
//     },
//   },
// })

import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'

dotenv.config()

export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 3001,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    ssr: true,
    rollupOptions: {
      input: 'src/main.tsx',
      output: {
        format: 'cjs',
        dir: 'dist/ssr-dist',
      },
    },
  },
})
