/**
 * @description  配置文件
 * @author zs
 * @date 2018/7/10
 *
 */

const path = require('path');

module.exports = {
    port: 3000,
    db: 'mongodb://root:root@118.24.75.177:27017/blog',
    logDir: path.join(__dirname, '../log/data')
};