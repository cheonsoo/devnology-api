import { Container } from 'typedi';
import formData from 'form-data';
import LoggerInstance from '@/loaders/logger';
import agendaFactory from './agenda';
import * as config from '@/config';

export default ({
  mongoConnection,
  models,
}: {
  mongoConnection: any;
  models: { name: string; model: any }[];
}) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model);
    });

    const agendaInstance = agendaFactory({ mongoConnection });
    // console.log(mongoConnection);
    // console.log(agendaInstance);
    Container.set('agendaInstance', agendaInstance);
    Container.set('logger', LoggerInstance);

    LoggerInstance.info('### Agenda injected into container');

    return { agenda: agendaInstance };
  } catch (e) {
    LoggerInstance.error('Error on dependency injector loader: %o', e);
    throw e;
  }
};
