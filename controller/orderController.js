const order = require('../models/orderSchema');

const postOrder = async(req, res) => {

    try {

        const order = req.body;
        console.log(order);

        
    } catch (error) {
           console.log(error);        
    }
}

module.exports = postOrder;
