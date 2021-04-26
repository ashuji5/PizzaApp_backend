const {signin, signup} = require('../controller/user');
const expressRouter = require('express').Router;


const router = expressRouter();

router.post('/signin', signin);
router.post('/signup', signup);

module.exports = router;