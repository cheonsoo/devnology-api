export default (router: any) => {
  router.get('/', (req: any, res: any) => {
    console.log('[get] /');
    res.json({
      status: 200,
      text: '/'
    });
  });

  router.get('/id', (req: any, res: any) => {
    console.log('[get] /id');
    res.json({
      status: 200,
      text: '/id'
    });
  });

  router.use('/user', (req: any, res: any, next: any) => {
    console.log('/user middle ware');
    next();
  });

  router.get('/user', (req: any, res: any) => {
    console.log('[get] /user');
    res.json({
      status: 200,
      text: '/user'
    });
  });

  return router;
};