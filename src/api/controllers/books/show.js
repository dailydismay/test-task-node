import * as booksService from '../../services/books';

export const showBook = async ctx => {
  const { id } = ctx.params;
  const data = await booksService.show(id);
  ctx.body = {
    data,
  };
};
