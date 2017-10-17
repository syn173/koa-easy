const Koa = require('koa');
const logger = require('koa-logger');
const server = require('koa-static');

const app = new Koa();

//app.use(logger());

app.use(server(__dirname + '/src/assets'));

app.use(server(__dirname));

app.listen(3000);