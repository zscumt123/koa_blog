/**
 * @description 入口文件
 * @author zs
 * @date 2018/7/10
 *
 */

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const router = require('./routers/index');
const config = require('./config/index');
const { onerror } = require('./middlewares');
require('./models');

const app = new Koa();
app.use(onerror);
app.use(bodyParser());

app.use(router.routes());

app.listen(config.port);