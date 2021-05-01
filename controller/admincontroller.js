const order = require('../models/orderSchema');


const getAllOrders = async(req, res) =>{
    
    try {
        
        const getData = await order.find({});
        console.log(req.headers)
        res.status(200).json(getData);

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
};

exports = module.exports = {getAllOrders};