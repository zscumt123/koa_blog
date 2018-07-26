/**
 * @description 入口文件
 * @author zs
 * @date 2018/7/10
 *
 */

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaLog4js = require('koa-log4');
const jwt = require('koa-jwt');

const router = require('./routers/index');
const config = require('./config/index');
const logger = require('./log');
const { onerror } = require('./middlewares');
require('./models');


const app = new Koa();
app.use(onerror);
app.use(koaLog4js.koaLogger(logger));
app.use(jwt({ secret: config.secret }).unless({
    path: [/\/login/, /\/register/]
}));
app.use(bodyParser());
app.use(router.routes());


app.listen(config.port);