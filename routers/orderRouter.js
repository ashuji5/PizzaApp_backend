const expressRouter = require('express').Router;
const {postOrder, getOrder} = require('../controller/menucontroller');

const router = expressRouter();

 router.post('/user', getOrder);
 router.post('/',postOrder);
module.exports = router;