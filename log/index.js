/**
 * @description  日志配置
 * @author zs
 * @date 2018/7/13
 *
 */

const path = require('path');
const log4js = require('koa-log4');

const config = require('../config');

log4js.configure({

    appenders: {
        out: { type: 'stdout' },  //输出到控制台
        resInfo: { type: 'dateFile', filename: path.join(config.logDir, 'res.log') },
        errInfo: { type: 'file', filename: path.join(config.logDir, 'error.log')  },
        'just-errors': { type: 'logLevelFilter', appender: 'errInfo',level: 'error' }
    },
    categories: {
        default: { appenders: ['out', 'resInfo', 'just-errors'], level: 'info' }
    },

});


const logger = log4js.getLogger();

module.exports = logger;
