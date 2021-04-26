const menu = require('../models/menuSchema');

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

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
}