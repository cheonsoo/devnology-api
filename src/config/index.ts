export const port = 3003;
export const database_url = 'mongodb://localhost:27017/devnology';
export const agenda = {
  dbCollection: process.env.AGENDA_DB_COLLECTION,
  pooltime: process.env.AGENDA_POOL_TIME,
  concurrency: parseInt(process.env.AGENDA_CONCURRENCY || '', 10),
};
export const logs = {
  level: 'silly',
};

export const jwtSecret = 'p4sta.w1th-b0logn3s3-s@uce';
export const jwtAlgorithm = ['sha1', 'RS256', 'HS256'];
// export const jwtSecret = process.env.JWT_SECRET;
// export const jwtAlgorithm = process.env.JWT_ALGO;

export const agendash = {
  user: 'agendash',
  password: '123456',
};

export const api = {
  prefix: '/api',
};
