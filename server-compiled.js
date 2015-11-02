'use strict';

var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');

var routes = require('./routes');

var app = koa();

app.use(cors({
  headers: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(bodyParser());

app.use(routes.user);
app.use(routes.region);
app.use(routes.task);
app.use(routes.site);

app.listen(3001, function () {
  console.log('Backend running at port 3001');
});

//# sourceMappingURL=server-compiled.js.map