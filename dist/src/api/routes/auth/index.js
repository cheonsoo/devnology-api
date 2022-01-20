"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (router) => {
    router.use('/auth', (req, res, next) => {
        console.log('auth middleware');
        next();
    });
    router.get('/auth', (req, res) => {
        console.log('[get] /');
        res.json({
            status: 200,
            text: '/'
        });
    });
    return router;
};
//# sourceMappingURL=index.js.map