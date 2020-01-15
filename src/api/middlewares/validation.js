import { validateSchema } from '../../util';

export const validationMiddleware = (schema, key) => async (ctx, next) => {
  try {
    await validateSchema(key.split('.').reduce((curr, prev) => prev[curr], ctx), schema);
    await next();
  } catch (error) {
    ctx.status = 422;
    ctx.body = {
      message: 'Unprocessable Entity.',
    };
  }
};
