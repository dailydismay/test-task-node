import { query } from '../src/db';
import { makeImage, makeAuthor, makeBook } from './data';

const seedAuthorsNum = 2e3;
const seedBooksNum = 1e5;

const seedAuthors = async () => {
  for (let i = 0; i < seedAuthorsNum; i += 1) {
    const fakeAuthor = makeAuthor();
    await query(
      `
        INSERT INTO authors(
          fullname
        ) VALUES(?)
      `,
      fakeAuthor,
    );
  }
};

const seedBooks = async () => {
  for (let i = 0; i < seedBooksNum; i += 1) {
    const fakeBook = makeBook();
    const fakeImage = makeImage();

    const { insertId: image } = await query(
      `
      INSERT INTO images(
        source
      ) VALUES(?)
    `,
      fakeImage,
    );

    await query(
      `
        INSERT INTO books(
          title,
          description,
          date,
          author,
          image
        ) VALUES (?, ?, ?, ?, ?)
      `,
      [...fakeBook, Math.floor(Math.random() * seedAuthorsNum), image],
    );
  }
};

(async () => {
  await seedAuthors();
  await seedBooks();
})();
