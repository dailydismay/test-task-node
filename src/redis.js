import { createClient } from 'redis';
import { wrapDel, wrapGet, wrapSet } from './util/promisedRedis';

export const client = createClient({ url: '' });

export const del = wrapDel(client);
export const get = wrapGet(client);
export const set = wrapSet(client);
