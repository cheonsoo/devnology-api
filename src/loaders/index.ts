import express from 'express';
import expressLoader from '@/loaders/express';
import mongoLoader from '@/loaders/mongodb';
import dependencyInjectorLoader from './dependencyInjector';
import Logger from './logger';

import './events';

export default async ({ app }: { app: express.Application }) => {
  const router = express.Router();

  await expressLoader({ app });
  const mongoConnection = await mongoLoader();

  const userModel = {
    name: 'userModel',
    // Notice the require syntax and the '.default'
    model: require('../models/user').default,
  };
  // const authModel = {
  //   name: 'authModel',
  //   // Notice the require syntax and the '.default'
  //   model: require('../models/auth').default,
  // };
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [userModel],
  });
  Logger.info('### Dependency Injector loaded');
};
