import 'dotenv/config';
import { start } from './server';

start();

process.on('uncaughtException', err => {
  console.log(err);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});
