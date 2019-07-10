import fs from 'fs';

import mysql from 'mysql';
import { makePromisedQuery, makePromisedPrepare } from './util';
import { join } from 'path';

const { db } = JSON.parse(
  fs.readFileSync(join(__dirname, '../config/dev.json')),
);

export const pool = mysql.createPool(db);

export const query = makePromisedQuery(pool);
