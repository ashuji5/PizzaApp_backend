const expressRouter = require('express').Router;
const {postOrder, getOrder, updateStatus} = require('../controller/menucontroller');

const router = expressRouter();

 router.post('/user', getOrder);
 router.post('/',postOrder);
 router.post('/status', updateStatus);
module.exports = router;