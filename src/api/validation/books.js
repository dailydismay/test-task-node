import joi from 'joi';

export const createBookSchema = joi.object().keys({
  title: joi
    .string()
    .alphanum()
    .max(64)
    .required(),
  description: joi
    .string()
    .alphanum()
    .max(512),
  date: joi.date().required(),
  author: joi.number().required(),
  image: joi.number().required(),
});

export const requestIdParamSchema = joi.object().keys({
  id: joi.number().required(),
});

export const updateBookSchema = joi.object().keys({
  title: joi
    .string()
    .alphanum()
    .max(64),
  description: joi
    .string()
    .alphanum()
    .max(512),
  date: joi.date(),
  author: joi.number(),
  image: joi.number(),
});

export const queryBookSchema = joi.object().keys({
  limit: joi.number(),
  offset: joi.number(),
  sort: joi.string().valid(['asc', 'desc']),
  author: joi.number(),
  orderBy: joi.string(),
});
