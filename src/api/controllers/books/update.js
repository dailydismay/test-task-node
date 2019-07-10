import * as booksService from '../../services/books';

export const updateBook = async ctx => {
  const { id } = ctx.params;

  await booksService.update(id, ctx.request.body);
  ctx.status = 204;
};
