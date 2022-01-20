import mongoose from 'mongoose';
// import { Db } from 'mongodb';
import { database_url } from '@/config';

export default async () => {
  console.log('### connecting to mongodb ...');

  // const conn = await mongoose.connect(database_url, {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true,
  // });

  const conn = await mongoose.connect(database_url);

  return conn.connection.db;
};
