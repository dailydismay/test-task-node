import * as booksService from '../../services/books';

export const createBook = async ctx => {
  const book = await booksService.createBook(ctx.request.body);

  ctx.status = 201;

  ctx.body = {
    data: book,
  };
};
