const path = require('path');
const Koa = require('koa');
const logger = require('koa-logger');
const server = require('koa-static');

const proxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');

const app = new Koa();

//app.use(logger());
app.use(server(path.resolve(process.cwd(), 'build')));

app.use(server(__dirname + '/src/assets'));

app.use(server(__dirname));

/* proxy api */
app.use(async (ctx, next) => {  
  if (ctx.url.startsWith('/api')) {   
    ctx.respond = false;   
    await k2c(proxy({    
      target: 'http://mms.mengtuiapp.com',
      changeOrigin: true,
      secure: false,
      // pathRewrite: {    
      //   '^/api': '' 
      // }    
    }))(ctx, next);  
  }  
  await next()
})

app.listen(3000);