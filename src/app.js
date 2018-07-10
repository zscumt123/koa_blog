/**
 * @description 入口文件
 * @author zs
 * @date 2018/7/10
 *
 */

const Koa = require('koa');


const router = require('./routers');
const config = require('./config');

const app = new Koa();

app.use(router.routes());

app.listen(config.port);