import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import fs from 'fs'
import express from 'express'
import path from 'path'

async function startServer() {
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrClientPath = require.resolve('client/ssr-dist/client.js')

  app.use('/assets', express.static(path.resolve(distPath, 'assets')))

  app.use('*', async (_, res, next) => {
    try {
      let template = fs.readFileSync(
        path.resolve(distPath, 'index.html'),
        'utf-8'
      )

      const { render } = await import(ssrClientPath)

      const appHtml = await render()

      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.send(html)
    } catch (e) {
      // vite.ssrFixStacktrace(e as Error)
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}
startServer()
