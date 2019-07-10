import { query } from '../../db';
import { execOrderBy } from '../../util';

export const create = async data => {
  const [book] = await query(
    `
    INSERT INTO books
    SET ?
  `,
    [
      {
        image: 1,
        ...data,
        date: new Date(data.date),
      },
    ],
  );
  return book;
};

export const show = async id => {
  const [book] = await query(
    `
    SELECT * FROM books book
    LEFT JOIN images image ON image.id = book.image
    LEFT JOIN authors author ON author.id = book.author
    WHERE book.id = ?
  `,
    [id],
  );
  return book;
};

export const list = async ({ offset = 0, limit = 100, orderBy, sort }) => {
  const baseQuery = `
        SELECT book.id, book.title, book.description, book.date, image.*, author.* FROM books book
        JOIN images image ON image.id = book.image
        JOIN authors author ON author.id = book.author
        ${execOrderBy('book', orderBy, ['id', 'title', 'date'], sort)}
        LIMIT ${limit}
        OFFSET ${offset}
      `;

  return query(baseQuery);
};

export const update = async (bookId, data) => {
  console.log(data);
  await query(
    `
    UPDATE books
    SET ?
    WHERE books.id=?
  `,
    [data, bookId],
  );
  return;
};
