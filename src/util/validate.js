import joi from 'joi';

export const validateSchema = (data, schema) =>
  new Promise((resolve, reject) => {
    joi.validate(data, schema, {}, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
