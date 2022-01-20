import Agenda from 'agenda';
import { agenda } from '@/config';

export default ({ mongoConnection }: { mongoConnection: any }) => {
  return new Agenda({
    mongo: mongoConnection,
    db: { collection: agenda.dbCollection },
    processEvery: agenda.pooltime,
    maxConcurrency: agenda.concurrency,
  });
};
