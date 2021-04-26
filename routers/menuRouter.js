
const expressRouter = require('express').Router;

const router = expressRouter();

const {getAllProducts, getProductById, createProduct} = require('../controller/menucontroller');

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/create', createProduct);

module.exports = router;