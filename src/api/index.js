import KoaRouter from 'koa-router';
import { booksRouter } from './routes/books';
import { okResponseMiddleware } from './middlewares/ok';

export const api = new KoaRouter({
  prefix: '/api',
})
  .use(okResponseMiddleware)
  .use(booksRouter.routes())
  .use(booksRouter.allowedMethods());
