var router=require('koa-router')();
var jwtChecker=require('../utils/jwtChecker');
var siteService      = require('../services/siteService');

router.get('/api/site', function* () {
    var tasks = siteService.listSites();
    this.body = tasks;
});
module.exports = router.routes();