export default (router: any) => {
  router.use('/auth', (req: any, res: any, next: any) => {
    console.log('auth middleware');
    next();
  });

  router.get('/auth', (req: any, res: any) => {
    console.log('[get] /');
    res.json({
      status: 200,
      text: '/'
    });
  });

  return router;
};