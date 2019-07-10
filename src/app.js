import Koa from 'koa';

import bodyParser from 'koa-body';
import { api } from './api';

export const app = new Koa();

app.use(bodyParser());
app.use(api.routes()).use(api.allowedMethods());
