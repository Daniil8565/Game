import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import * as fs from 'fs'
import { createProxyMiddleware } from 'http-proxy-middleware'
import * as path from 'path'
import type { ViteDevServer } from 'vite'
import { createServer as createViteServer } from 'vite'

dotenv.config()

const isDev = () => process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()
  // app.use(cors())
  app.use(
    cors({
      origin: 'http://localhost:3000', // Указываем клиентский порт
      credentials: true, // Разрешаем передачу куки
    })
  )
  const port = Number(process.env.SERVER_PORT) || 3001

  let vite: ViteDevServer | undefined
  const distPath = path.dirname(require.resolve('../client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('../client'))
  const ssrClientPath = require.resolve('../client/ssr-dist/client.cjs')

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

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    // const cook =

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

      // Загружаем функцию рендеринга из ssr.tsx
      const { render } = isDev()
        ? await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
        : require(ssrClientPath)
      // console.log(
      //   `req.headers.cookie ${req.params} res ${JSON.stringify(res)} `
      // )
      console.log(`Server: Cookies received: ${req.headers.cookie}`)
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
