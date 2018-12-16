import * as express from 'express'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router'
import { ServerStyleSheet } from 'styled-components'
import { App } from '../shared/app'
import { routes } from '../shared/routes'

const port = process.env.PORT || 3000
const app = express()

app.use(express.static('dist/public'))

const createHtml = ({
  body,
  styles,
  title,
  data
}: {
  body: string
  styles: string
  title: string
  data: any
}) => `
  <!DOCTYPE>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
      <script src="/bundle.js" defer></script>
      <script>window.__INITIAL_DATA__ = ${data}</script>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`

const activeRoutePromise = (location, routes) => {
  const activeRoute = routes.find(route => !!matchPath(location, route as any))
  if (!activeRoute || !activeRoute.fetchInitData) return Promise.resolve()
  return activeRoute.fetchInitData()
}

app.get('*', (req, res, next) => {
  const location = req.url
  const promise = activeRoutePromise(location, routes)

  promise
    .then(data => {
      const sheet = new ServerStyleSheet()
      const AppComponent = React.createElement(App)
      const ServerRouter = React.createElement(
        StaticRouter,
        { location, context: { data } as any },
        AppComponent
      )
      const ServerRouterWithStyles = sheet.collectStyles(ServerRouter)

      const body = renderToString(ServerRouterWithStyles)
      const styles = sheet.getStyleTags()
      const title = 'Isomorphic rendering playground'

      res.send(createHtml({ body, styles, title, data: JSON.stringify(data) }))
    })
    .catch(next)
})

app.use((err, _, __, next) => {
  console.error(err.stack)
  next(err)
})

app.use((err, _, res, __) => {
  res.status(err.status || 500).json(err.message)
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
