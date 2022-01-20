"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agenda = exports.database_url = exports.port = void 0;
exports.port = 3003;
exports.database_url = 'mongodb://localhost:27017/devnology';
exports.agenda = {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY || '', 10),
};
//# sourceMappingURL=index.js.map