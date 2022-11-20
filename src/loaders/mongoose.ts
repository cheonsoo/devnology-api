import mongoose from 'mongoose';
// import { Db } from 'mongodb';
import { database_url } from '@/config';

export default async () => {
  const connection = await mongoose.connect(database_url);
  return connection.connection.db;
};

// export default async (): Promise<Db> => {
//   const connection = await mongoose.connect(database_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   });
//   return connection.connection.db;
// };
