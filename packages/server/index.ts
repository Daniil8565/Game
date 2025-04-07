// import cors from 'cors'
// import dotenv from 'dotenv'
// import express from 'express'
// import * as fs from 'fs'
// import { createProxyMiddleware } from 'http-proxy-middleware'
// import * as path from 'path'
// import type { ViteDevServer } from 'vite'
// import { createServer as createViteServer } from 'vite'
// // import { createComment, getComments } from './controllers/commentController'

// // import { createReply, getReplies } from './controllers/replyController'
// import {
//   createTopic,
//   getTopicById,
//   getTopics,
// } from './controllers/topicController'
// import { authMiddleware } from './middleware/auth'
// import { getComments } from './controllers/commentController'
// import { createComment } from './controllers/commentController'
// import { getReplies, createReply } from './controllers/replyController'

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

//   app.get('/api/topics', authMiddleware, getTopics)
//   app.post('/api/topics', authMiddleware, createTopic)
//   app.get('/api/topics/:id', authMiddleware, getTopicById)
//   app.get('/api/topics/:topicId/comments', authMiddleware, getComments)
//   app.post('/api/topics/:topicId/comments', authMiddleware, createComment)
//   app.get('/api/comments/:commentId/replies', authMiddleware, getReplies)
//   app.post('/api/comments/:commentId/replies', authMiddleware, createReply)

//   app.get('/signin/callback', async (req, _) => {
//     const { code, cid } = req.query // Извлекаем параметры из URL (code и cid)

//     console.log(code, cid)
//   })

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

import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import * as fs from 'fs'
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

  const port = Number(process.env.SERVER_PORT) || 3001

  let vite: ViteDevServer | undefined
  // const distPath = path.resolve(__dirname, './client-dist')
  // const srcPath = path.dirname(require.resolve('../client')) // Оставляем без изменений, так как используется в dev-режиме
  // const ssrClientPath = path.resolve(
  //   __dirname,
  //   './client-dist/ssr-dist/client.cjs'
  // )
  const distPath = path.resolve(__dirname, './client-dist')
  const srcPath = path.resolve(__dirname, './client')
  const ssrClientPath = path.resolve(
    __dirname,
    './client-dist/ssr-dist/client.cjs'
  )
  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  }

  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: { '*': '' },
      target: 'https://ya-praktikum.tech/api/v2',
    })
  )

  app.get('/api/topics', authMiddleware, getTopics)
  app.post('/api/topics', authMiddleware, createTopic)
  app.get('/api/topics/:id', authMiddleware, getTopicById)
  app.get('/api/topics/:topicId/comments', authMiddleware, getComments)
  app.post('/api/topics/:topicId/comments', authMiddleware, createComment)
  app.get('/api/comments/:commentId/replies', authMiddleware, getReplies)
  app.post('/api/comments/:commentId/replies', authMiddleware, createReply)

  app.get('/signin/callback', async (req, res) => {
    const { code, cid } = req.query
    console.log(code, cid)
    res.json({ code, cid })
  })

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.get('/sw.js', (_, res) => {
    const filePath = isDev()
      ? path.resolve(srcPath, 'sw.js')
      : path.resolve(distPath, 'sw.js')

    res.sendFile(filePath, {
      headers: {
        'Content-Type': 'application/javascript',
      },
    })
  })

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string
      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
      } else {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
        template = await vite!.transformIndexHtml(url, template)
      }

      const { render } = isDev()
        ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
        : require(ssrClientPath)

      const appHtml = await render(url, req.headers.cookie)
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
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
