export const okResponseMiddleware = async (ctx, next) => {
  const regexp = /^[1-3][0-9][0-9]$/;

  await next();
  ctx.body.ok = regexp.test(ctx.status);
};
