var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');
var jwtChecker = require('./utils/jwtChecker');

var routes = require('./routes');

var app = koa();

app.use(cors({
  headers: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(bodyParser());
app.use(function* (next){
	if(this.url==='/sessions/create'){
		console.log('logging request');
		yield next;
	}
	 else{
	  var user = yield jwtChecker(this.header);
	if(!user){
		this.status=403;
	}
	else{
		yield next;
	}
}
});
app.use(routes.user);
app.use(routes.region);
app.use(routes.task);
app.use(routes.site);

app.listen(3001, function() {
  console.log('Backend running at port 3001');
});