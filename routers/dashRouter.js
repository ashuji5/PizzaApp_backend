const expressRouter = require('express').Router;
const {getAllOrders} = require('../controller/admincontroller');

const router = expressRouter();


router.get('/', getAllOrders);

module.exports = router;