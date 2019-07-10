import KoaRouter from 'koa-router';
import {
  createBook,
  listBooks,
  updateBook,
  showBook,
} from '../controllers/books';
import {
  queryBookSchema,
  createBookSchema,
  updateBookSchema,
  requestIdParamSchema,
} from '../validation/books';

import { validationMiddleware } from '../middlewares/validation';

export const booksRouter = new KoaRouter({
  prefix: '/books',
});

booksRouter
  .get('/', validationMiddleware(queryBookSchema, 'query'), listBooks)
  .get('/:id', validationMiddleware(requestIdParamSchema, 'params'), showBook)
  .post('/', validationMiddleware(createBookSchema, 'body'), createBook)
  .put(
    '/:id',
    validationMiddleware(requestIdParamSchema, 'id'),
    validationMiddleware(updateBookSchema, 'body'),
    updateBook,
  );
