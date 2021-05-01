const menu = require('../models/menuSchema');
const order = require('../models/orderSchema');

const getAllProducts = async(req, res) =>{
    
    try {
        
        const getData = await menu.find({});
        res.status(200).json(getData);

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

const getProductById = async(req, res) =>{
    
    try {
        
        const getData = await menu.findById(req.params.id);
        res.status(200).send(getData);


    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

const createProduct = async(req, res) => {


    
    const product = req.body;
    const newProduct = new menu(product);
    try {
         await newProduct.save();
         console.log(product);
         res.status(201).json(newProduct);
        
    } catch (error) {
        res.status(409).json({message : error.message});
    }
} 

const postOrder = async(req, res) => {

    
    console.log(req.body);
   // const [FormData, price, cart, user] = req.body;
    const newOrder = new order({customer : req.body.user, items : req.body.cart, phone: req.body.FormData.phone, address : req.body.FormData.address, totalPrice : req.body.price});

    try {

        await newOrder.save();

    res.status(201).json(newOrder);
        
    } catch (error) {
           console.log(error);        
    }
}

const getOrder = async(req, res) =>{
    
    try {

        console.log(req.body);
        
        const getData = await order.find({customer : req.body.id}, null, {sort : {'createdAt' : -1}});
        res.status(200).send(getData);


    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    postOrder,
    getOrder
      
}