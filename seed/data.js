import faker from 'faker';

export const makeImage = () => [faker.image.imageUrl()];

export const makeAuthor = () => [faker.name.findName()];

export const makeBook = () => [
  faker.name.title(),
  faker.lorem.paragraph(),
  faker.date.past(),
];
