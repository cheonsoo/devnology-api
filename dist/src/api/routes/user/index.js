"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    router.get('/', (req, res) => {
        console.log('[get] /');
        res.json({
            status: 200,
            text: '/'
        });
    });
    router.get('/id', (req, res) => {
        console.log('[get] /id');
        res.json({
            status: 200,
            text: '/id'
        });
    });
    router.use('/user', (req, res, next) => {
        console.log('/user middle ware');
        next();
    });
    router.get('/user', (req, res) => {
        console.log('[get] /user');
        res.json({
            status: 200,
            text: '/user'
        });
    });
    return router;
};
//# sourceMappingURL=index.js.map