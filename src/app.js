import Koa from 'koa';

import bodyParser from 'koa-body';

export const app = new Koa();

app.use(bodyParser());
