const order = require('../models/orderSchema');
var ObjectId = require('mongodb').ObjectID;


const statuscontroller = async(req, res) => {

    try {

        console.log(req.params)
        const Id = req.params.id;
        const data = await order.findById(ObjectId(Id.trim()));
        console.log(data);
        res.status(200).json(data);
        
    } catch (error) {
           console.log(error);        
    }
}

module.exports = {statuscontroller}