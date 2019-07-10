import * as booksService from '../../services/books';

export const createBook = async ctx => {
  const data = await booksService.create(ctx.request.body);

  ctx.status = 201;

  ctx.body = {
    data,
  };
};
