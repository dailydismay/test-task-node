import * as bookService from '../../services/books';

export const showBook = async ctx => {
  const { id } = ctx.params;
  const [book] = await bookService.show();
};
