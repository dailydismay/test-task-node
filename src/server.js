import { createServer } from 'http';
import { app } from './app';

export const start = () => {
  const server = createServer(app.callback());
  server.listen(process.env.PORT || 3000);
};
