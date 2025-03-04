// import cors from 'cors'
// import dotenv from 'dotenv'
// import express from 'express'
// import * as fs from 'fs'
// import { createProxyMiddleware } from 'http-proxy-middleware'
// import * as path from 'path'
// import type { ViteDevServer } from 'vite'
// import { createServer as createViteServer } from 'vite'
// import { createComment, getComments } from './controllers/commentController'
// import { createReply, getReplies } from './controllers/replyController'
// import {
//   createTopic,
//   getTopicById,
//   getTopics,
// } from './controllers/topicController'
// import { authMiddleware } from './middleware/auth'
// import { sequelize } from './models'

// dotenv.config()

// const isDev = () => process.env.NODE_ENV === 'development'

// async function startServer() {
//   const app = express()
//   // app.use(cors())
//   app.use(
//     cors({
//       origin: 'http://localhost:3000', // Указываем клиентский порт
//       credentials: true, // Разрешаем передачу куки
//     })
//   )
//   sequelize.sync({ force: true }).then(() => {
//     console.log('Database synced')
//   })
//   const port = Number(process.env.SERVER_PORT) || 3001

//   let vite: ViteDevServer | undefined
//   const distPath = path.dirname(require.resolve('../client/dist/index.html'))
//   const srcPath = path.dirname(require.resolve('../client'))
//   const ssrClientPath = require.resolve('../client/ssr-dist/client.cjs')

//   if (isDev()) {
//     vite = await createViteServer({
//       server: { middlewareMode: true },
//       root: srcPath,
//       appType: 'custom',
//     })
//     app.use(vite.middlewares)
//   }

//   app.use(
//     '/api/v2',
//     createProxyMiddleware({
//       changeOrigin: true,
//       cookieDomainRewrite: { '*': '' },
//       target: 'https://ya-praktikum.tech/api/v2',
//     })
//   )

//   // API роуты с авторизацией
//   app.get('/api/topics', authMiddleware, getTopics)
//   app.post('/api/topics', authMiddleware, createTopic)
//   app.get('/api/topics/:id', authMiddleware, getTopicById)
//   app.get('/api/topics/:topicId/comments', authMiddleware, getComments)
//   app.post('/api/topics/:topicId/comments', authMiddleware, createComment)
//   app.get('/api/comments/:commentId/replies', authMiddleware, getReplies)
//   app.post('/api/comments/:commentId/replies', authMiddleware, createReply)

//   app.get('/api', (_, res) => {
//     res.json('👋 Howdy from the server :)')
//   })

//   if (!isDev()) {
//     app.use('/assets', express.static(path.resolve(distPath, 'assets')))
//   }

//   app.use('*', async (req, res, next) => {
//     const url = req.originalUrl

//     try {
//       let template: string
//       if (!isDev()) {
//         template = fs.readFileSync(
//           path.resolve(distPath, 'index.html'),
//           'utf-8'
//         )
//       } else {
//         template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
//         template = await vite!.transformIndexHtml(url, template)
//       }

//       // Загружаем функцию рендеринга из ssr.tsx
//       const { render } = isDev()
//         ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
//         : require(ssrClientPath)

//       const appHtml = await render(url, req.headers.cookie)
//       const html = template.replace(`<!--ssr-outlet-->`, appHtml)

//       res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
//     } catch (e) {
//       if (isDev()) {
//         vite!.ssrFixStacktrace(e as Error)
//       }
//       next(e)
//     }
//   })

//   app.listen(port, () => {
//     console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
//   })
// }

// startServer()

// import cors from 'cors'
// import dotenv from 'dotenv'
// import express from 'express'
// import * as fs from 'fs'
// import { createProxyMiddleware } from 'http-proxy-middleware'
// import * as path from 'path'
// import type { ViteDevServer } from 'vite'
// import { createServer as createViteServer } from 'vite'
// import { createComment, getComments } from './controllers/commentController'
// import { createReply, getReplies } from './controllers/replyController'
// import {
//   createTopic,
//   getTopicById,
//   getTopics,
// } from './controllers/topicController'
// import { authMiddleware } from './middleware/auth'
// import { sequelize } from './models'

// dotenv.config()

// const isDev = () => process.env.NODE_ENV === 'development'

// async function startServer() {
//   const app = express()
//   app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       credentials: true,
//     })
//   )
//   app.use(express.json())
//   app.use(express.urlencoded({ extended: true }))
//   app.use(express.static('uploads'))

//   const port = Number(process.env.SERVER_PORT) || 3001

//   let vite: ViteDevServer | undefined
//   const clientDistPath = path.resolve(__dirname, 'client-dist')
//   const srcPath = path.resolve(__dirname, '../../client')

//   if (isDev()) {
//     vite = await createViteServer({
//       server: { middlewareMode: true },
//       root: srcPath,
//       appType: 'custom',
//     })
//     app.use(vite.middlewares)
//   }

//   try {
//     await sequelize.authenticate()
//     console.log('Database connected')
//     await sequelize.sync({ force: true })
//     console.log('Database synced')
//   } catch (error) {
//     console.error('Database connection failed:', error)
//   }

//   app.use(
//     '/api/v2',
//     createProxyMiddleware({
//       changeOrigin: true,
//       cookieDomainRewrite: { '*': '' },
//       target: 'https://ya-praktikum.tech/api/v2',
//     })
//   )

//   app.get('/api/topics', authMiddleware, getTopics)
//   app.post('/api/topics', authMiddleware, createTopic)
//   app.get('/api/topics/:id', authMiddleware, getTopicById)
//   app.get('/api/topics/:topicId/comments', authMiddleware, getComments)
//   app.post('/api/topics/:topicId/comments', authMiddleware, createComment)
//   app.get('/api/comments/:commentId/replies', authMiddleware, getReplies)
//   app.post('/api/comments/:commentId/replies', authMiddleware, createReply)

//   app.get('/api', (_, res) => {
//     res.json('👋 Howdy from the server :)')
//   })

//   if (!isDev()) {
//     app.use('/assets', express.static(path.resolve(clientDistPath, 'assets')))
//   }

//   app.use('*', async (req, res, next) => {
//     const url = req.originalUrl
//     try {
//       let template: string
//       if (!isDev()) {
//         template = fs.readFileSync(
//           path.resolve(clientDistPath, 'index.html'),
//           'utf-8'
//         )
//       } else {
//         template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
//         template = await vite!.transformIndexHtml(url, template)
//       }

//       const { render } = isDev()
//         ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
//         : require(path.resolve(clientDistPath, 'ssr-dist/client.cjs'))

//       const appHtml = await render(url, req.headers.cookie)
//       const html = template.replace(`<!--ssr-outlet-->`, appHtml)

//       res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
//     } catch (e) {
//       if (isDev()) {
//         vite!.ssrFixStacktrace(e as Error)
//       }
//       next(e)
//     }
//   })

//   app.listen(port, () => {
//     console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
//   })
// }

// startServer()

// это работает
// import cors from 'cors'
// import dotenv from 'dotenv'
// import express from 'express'
// import * as fs from 'fs'
// import { createProxyMiddleware } from 'http-proxy-middleware'
// import * as path from 'path'
// import type { ViteDevServer } from 'vite'
// import { createServer as createViteServer } from 'vite'

// dotenv.config()

// const isDev = () => process.env.NODE_ENV === 'development'

// async function startServer() {
//   const app = express()
//   // app.use(cors())
//   app.use(
//     cors({
//       origin: 'http://localhost:3000', // Указываем клиентский порт
//       credentials: true, // Разрешаем передачу куки
//     })
//   )
//   const port = Number(process.env.SERVER_PORT) || 3001

//   let vite: ViteDevServer | undefined
//   const distPath = path.dirname(require.resolve('../client/dist/index.html'))
//   const srcPath = path.dirname(require.resolve('../client'))
//   const ssrClientPath = require.resolve('../client/ssr-dist/client.cjs')

//   if (isDev()) {
//     vite = await createViteServer({
//       server: { middlewareMode: true },
//       root: srcPath,
//       appType: 'custom',
//     })
//     app.use(vite.middlewares)
//   }

//   app.use(
//     '/api/v2',
//     createProxyMiddleware({
//       changeOrigin: true,
//       cookieDomainRewrite: { '*': '' },
//       target: 'https://ya-praktikum.tech/api/v2',
//     })
//   )

//   app.get('/api', (_, res) => {
//     res.json('👋 Howdy from the server :)')
//   })

//   if (!isDev()) {
//     app.use('/assets', express.static(path.resolve(distPath, 'assets')))
//   }

//   app.use('*', async (req, res, next) => {
//     const url = req.originalUrl

//     try {
//       let template: string
//       if (!isDev()) {
//         template = fs.readFileSync(
//           path.resolve(distPath, 'index.html'),
//           'utf-8'
//         )
//       } else {
//         template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
//         template = await vite!.transformIndexHtml(url, template)
//       }

//       // Загружаем функцию рендеринга из ssr.tsx
//       const { render } = isDev()
//         ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
//         : require(ssrClientPath)

//       const appHtml = await render(url, req.headers.cookie)
//       const html = template.replace(`<!--ssr-outlet-->`, appHtml)

//       res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
//     } catch (e) {
//       if (isDev()) {
//         vite!.ssrFixStacktrace(e as Error)
//       }
//       next(e)
//     }
//   })

//   app.listen(port, () => {
//     console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
//   })
// }

// startServer()
// ______________________________________

// тут сервер рестартится
// import cors from 'cors'
// import dotenv from 'dotenv'
// import express from 'express'
// import * as fs from 'fs'
// import { createProxyMiddleware } from 'http-proxy-middleware'
// import * as path from 'path'
// import type { ViteDevServer } from 'vite'
// import { createServer as createViteServer } from 'vite'
// import { createComment, getComments } from './controllers/commentController'
// import { createReply, getReplies } from './controllers/replyController'
// import {
//   createTopic,
//   getTopicById,
//   getTopics,
// } from './controllers/topicController'
// import { authMiddleware } from './middleware/auth'
// import { sequelize } from './models'

// dotenv.config()

// const isDev = () => process.env.NODE_ENV === 'development'

// async function startServer() {
//   const app = express()
//   app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       credentials: true,
//     })
//   )
//   app.use(express.json())
//   app.use(express.urlencoded({ extended: true }))
//   app.use(express.static('uploads'))

//   const port = Number(process.env.SERVER_PORT) || 3001

//   let vite: ViteDevServer | undefined
//   const distPath = path.dirname(require.resolve('../client/dist/index.html'))
//   const srcPath = path.dirname(require.resolve('../client'))
//   const ssrClientPath = path.resolve(distPath, '../client/ssr-dist/client.cjs') // Прямой путь к сгенерированному файлу

//   if (isDev()) {
//     vite = await createViteServer({
//       server: { middlewareMode: true },
//       root: srcPath,
//       appType: 'custom',
//     })
//     app.use(vite.middlewares)
//   }

//   try {
//     await sequelize.authenticate()
//     console.log('Database connected')
//     await sequelize.sync({ force: true })
//     console.log('Database synced')
//   } catch (error) {
//     console.error('Database connection failed:', error)
//   }

//   app.use(
//     '/api/v2',
//     createProxyMiddleware({
//       changeOrigin: true,
//       cookieDomainRewrite: { '*': '' },
//       target: 'https://ya-praktikum.tech/api/v2',
//     })
//   )

//   app.get('/api/topics', authMiddleware, getTopics)
//   app.post('/api/topics', authMiddleware, createTopic)
//   app.get('/api/topics/:id', authMiddleware, getTopicById)
//   app.get('/api/topics/:topicId/comments', authMiddleware, getComments)
//   app.post('/api/topics/:topicId/comments', authMiddleware, createComment)
//   app.get('/api/comments/:commentId/replies', authMiddleware, getReplies)
//   app.post('/api/comments/:commentId/replies', authMiddleware, createReply)

//   app.get('/api', (_, res) => {
//     res.json('👋 Howdy from the server :)')
//   })

//   if (!isDev()) {
//     app.use('/assets', express.static(path.resolve(distPath, 'assets')))
//   }

//   app.use('*', async (req, res, next) => {
//     const url = req.originalUrl
//     try {
//       let template: string
//       if (!isDev()) {
//         template = fs.readFileSync(
//           path.resolve(distPath, 'index.html'),
//           'utf-8'
//         )
//       } else {
//         template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
//         template = await vite!.transformIndexHtml(url, template)
//       }

//       const { render } = isDev()
//         ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
//         : require(ssrClientPath)

//       const appHtml = await render(url, req.headers.cookie)
//       const html = template.replace(`<!--ssr-outlet-->`, appHtml)

//       res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
//     } catch (e) {
//       if (isDev()) {
//         vite!.ssrFixStacktrace(e as Error)
//       }
//       next(e)
//     }
//   })

//   app.listen(port, () => {
//     console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
//   })
// }

// startServer()

// ________________________

// ниже рабочая версия
// import cors from 'cors'
// import dotenv from 'dotenv'
// import express from 'express'
// import * as fs from 'fs'
// import { createProxyMiddleware } from 'http-proxy-middleware'
// import * as path from 'path'
// import type { ViteDevServer } from 'vite'
// import { createServer as createViteServer } from 'vite'
// import { createComment, getComments } from './controllers/commentController'
// import { createReply, getReplies } from './controllers/replyController'
// import {
//   createTopic,
//   getTopicById,
//   getTopics,
// } from './controllers/topicController'
// import { authMiddleware } from './middleware/auth'
// import { sequelize } from './models'

// dotenv.config()

// const isDev = () => process.env.NODE_ENV === 'development'

// async function startServer() {
//   const app = express()
//   app.use(
//     cors({
//       origin: 'http://localhost:3000',
//       credentials: true,
//     })
//   )
//   app.use(express.json())
//   app.use(express.urlencoded({ extended: true }))
//   app.use(express.static('uploads'))

//   const port = Number(process.env.SERVER_PORT) || 3001

//   let vite: ViteDevServer | undefined
//   const clientDistPath = path.resolve(__dirname, 'client-dist') // Путь к собранным файлам клиента в контейнере
//   const srcPath = path.resolve(__dirname, '../client') // Путь к исходникам клиента на хосте

//   if (isDev()) {
//     vite = await createViteServer({
//       server: { middlewareMode: true },
//       root: srcPath,
//       appType: 'custom',
//     })
//     app.use(vite.middlewares)
//   }

//   try {
//     await sequelize.authenticate()
//     console.log('Database connected')
//     await sequelize.sync({ force: true })
//     console.log('Database synced')
//   } catch (error) {
//     console.error('Database connection failed:', error)
//   }

//   app.use(
//     '/api/v2',
//     createProxyMiddleware({
//       changeOrigin: true,
//       cookieDomainRewrite: { '*': '' },
//       target: 'https://ya-praktikum.tech/api/v2',
//     })
//   )

//   app.get('/api/topics', authMiddleware, getTopics)
//   app.post('/api/topics', authMiddleware, createTopic)
//   app.get('/api/topics/:id', authMiddleware, getTopicById)
//   app.get('/api/topics/:topicId/comments', authMiddleware, getComments)
//   app.post('/api/topics/:topicId/comments', authMiddleware, createComment)
//   app.get('/api/comments/:commentId/replies', authMiddleware, getReplies)
//   app.post('/api/comments/:commentId/replies', authMiddleware, createReply)

//   app.get('/api', (_, res) => {
//     res.json('👋 Howdy from the server :)')
//   })

//   if (!isDev()) {
//     app.use('/assets', express.static(path.resolve(clientDistPath, 'assets')))
//   }

//   app.use('*', async (req, res, next) => {
//     const url = req.originalUrl
//     try {
//       let template: string
//       if (!isDev()) {
//         template = fs.readFileSync(
//           path.resolve(clientDistPath, 'index.html'),
//           'utf-8'
//         ) // Корректный путь в контейнере
//       } else {
//         template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
//         template = await vite!.transformIndexHtml(url, template)
//       }

//       const { render } = isDev()
//         ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
//         : require(path.resolve(clientDistPath, 'ssr-dist/client.cjs'))

//       const appHtml = await render(url, req.headers.cookie)
//       const html = template.replace(`<!--ssr-outlet-->`, appHtml)

//       res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
//     } catch (e) {
//       if (isDev()) {
//         vite!.ssrFixStacktrace(e as Error)
//       }
//       next(e)
//     }
//   })

//   app.listen(port, () => {
//     console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
//   })
// }

// startServer()
// ________________________________

// последняя актуальная версия - не работает авторизация
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import * as fs from 'fs'
import * as http from 'http'
import { createProxyMiddleware } from 'http-proxy-middleware'
import * as path from 'path'

import type { ViteDevServer } from 'vite'
import { createServer as createViteServer } from 'vite'
import { createComment, getComments } from './controllers/commentController'
import { createReply, getReplies } from './controllers/replyController'
import {
  createTopic,
  getTopicById,
  getTopics,
} from './controllers/topicController'
import { authMiddleware } from './middleware/auth'
import { sequelize } from './models'

dotenv.config()

const isDev = () => process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  )
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static('uploads'))

  const port = Number(process.env.SERVER_PORT) || 3001

  let vite: ViteDevServer | undefined
  // const clientDistPath = path.resolve(__dirname, '../client/dist') // Прямой путь к dist
  const clientDistPath = path.resolve(__dirname, 'client-dist') // путь к dist в контейнере
  const srcPath = path.resolve(__dirname, '../client')

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  }

  try {
    await sequelize.authenticate()
    console.log('Database connected')
    await sequelize.sync({ force: true })
    console.log('Database synced')
  } catch (error) {
    console.error('Database connection failed:', error)
  }

  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: { '*': '' },
      target: 'https://ya-praktikum.tech',
      timeout: 30000,
      // logger: console,
      secure: false,
      onProxyReq: (
        proxyReq: any,
        req: express.Request,
        res: express.Response
      ) => {
        console.log(`Proxying request to ${req.url} -> ${proxyReq.path}`)
      },
      onProxyRes: (
        proxyRes: http.IncomingMessage,
        req: express.Request,
        res: express.Response
      ) => {
        console.log(
          `Proxy response from ${req.url} with status ${proxyRes.statusCode} and headers:`,
          proxyRes.headers
        )
        if (!res.headersSent && proxyRes.statusCode) {
          res
            .status(proxyRes.statusCode)
            .set(proxyRes.headers || {})
            .end()
        }
      },
      onError: (err: Error, req: express.Request, res: express.Response) => {
        console.error(`Proxy error for ${req.url}:`, err.message, err.stack)
        if (!res.headersSent) {
          res.status(502).json({
            error: 'Proxy error',
            message: err.message,
            stack: err.stack,
          })
        }
      },
    })
  )

  app.get('/api/topics', authMiddleware, getTopics)
  app.post('/api/topics', authMiddleware, createTopic)
  app.get('/api/topics/:id', authMiddleware, getTopicById)
  app.get('/api/topics/:topicId/comments', authMiddleware, getComments)
  app.post('/api/topics/:topicId/comments', authMiddleware, createComment)
  app.get('/api/comments/:commentId/replies', authMiddleware, getReplies)
  app.post('/api/comments/:commentId/replies', authMiddleware, createReply)

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(clientDistPath, 'assets')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    try {
      let template: string
      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(clientDistPath, 'index.html'),
          'utf-8'
        )
      } else {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
        template = await vite!.transformIndexHtml(url, template)
      }

      const ssrClientPath = path.resolve(clientDistPath, 'ssr-dist/client.cjs')
      console.log('Client Dist Path:', clientDistPath)
      console.log('SSR Client Path:', ssrClientPath)
      const { render } = isDev()
        ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
        : require(ssrClientPath)

      const appHtml = await render(url, req.headers.cookie)
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)
      console.log(`req.headers.cookie ${req.headers.cookie}`)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      console.error('Error in SSR:', e)
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
