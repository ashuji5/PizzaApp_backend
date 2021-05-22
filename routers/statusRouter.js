const expressRouter = require('express').Router;
const {statuscontroller} = require('../controller/statuscontroller')

const router = expressRouter({ mergeParams: true });

 router.get('/',statuscontroller);
module.exports = router;