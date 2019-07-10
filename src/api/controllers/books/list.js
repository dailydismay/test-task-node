import * as booksService from '../../services/books';

export const listBooks = async ctx => {
  const data = await booksService.list(ctx.query);
  ctx.body = {
    data,
  };
};
