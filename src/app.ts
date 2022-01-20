import express from 'express';
import loaders from '@/loaders';
import { port } from '@/config';

async function startServer () {
  const app = express();

  loaders({ app });

  app
    .listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    })
    .on('error', (err: any) => {
      console.log('[ERROR] error', err);

      // process.exit(1);
    });
}

startServer();
