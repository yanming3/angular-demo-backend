var router     = require('koa-router')();
var jwtChecker = require('../utils/jwtChecker');
var regionService      = require('../services/regionService');
var _          = require('lodash');

router.get('/api/region', function* () {
  var user = yield jwtChecker(this.header);
  var regions = regionService.getRegions();
  if ( ! user) {
  }
  this.body = regions;
});

module.exports = router.routes();