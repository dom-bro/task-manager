import http from 'http'
import Koa from 'koa'
import KoaRouter from 'koa-router'
import cors from '@koa/cors'
const app = new Koa()
const router = new KoaRouter()

router.get('/echo', (ctx, next) => {
  ctx.body = ctx
})

app.use(cors())
app.use(router.routes())

const PORT = 8686
const server = http.createServer(app.callback())
server.listen(PORT)
console.log(`Server running at http://localhost:${PORT}`)
