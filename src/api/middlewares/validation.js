import { validateSchema } from '../../util';

export const validationMiddleware = (schema, key) => async (ctx, next) => {
  try {
    await validateSchema(ctx[key], schema);
    await next();
  } catch (error) {
    ctx.status = 422;
    ctx.body = {
      message: 'Unprocessable Entity.',
    };
  }
};
