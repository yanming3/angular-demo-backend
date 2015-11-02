var router=require('koa-router')();
var jwtChecker=require('../utils/jwtChecker');
var taskService      = require('../services/taskService');

router.get('/api/task', function* () {
    var tasks = taskService.listTask();
    this.body = tasks;
});
router.post('/api/task', function* () {
    var tasks = regionService.listTask();
    this.body = {'success':true,'result':{}};
});
module.exports = router.routes();