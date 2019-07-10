import { query } from '../src/db';
import { makeImage, makeAuthor, makeBook } from './data';
import { AuthorsQueue } from './authorQueue';

const seedBooksNum = 1e5;
const seedAuthorsNum = 2e3;
const delimiter = seedBooksNum / seedAuthorsNum;

const authorQueue = new AuthorsQueue(delimiter);

const seedAuthors = async () => {
  for (let i = 0; i < seedAuthorsNum; i += 1) {
    const fakeAuthor = makeAuthor();
    const { insertId } = await query(
      `
        INSERT INTO authors(
          fullname
        ) VALUES(?)
      `,
      fakeAuthor,
    );

    authorQueue.add(insertId);
    console.log(fakeAuthor);
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
        ) VALUES (?)
      `,
      {
        ...fakeBook,
        author: authorQueue.currentAuthor,
        image,
      },
    );
  }
};

(async () => {
  await seedAuthors();
  await seedBooks();
})();
