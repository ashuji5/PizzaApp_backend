const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({

    customer : {
        type : String,
        required : true
    },

    items : {
        type : Object,
        required : true,
    },

    phone : {
        type : String,
        required : true,
    },

    address : {
        type: String,
        required: true,
    },

    paymentType : {
        type: String,
        default : 'COD'
    },

    status :{
        type : String,
       default : "Order_placed"
    }, 

    totalPrice : {
        type : Object,
        required: true,
    },



}, {timestamps : true});


const orderdata = new mongoose.model("order", orderSchema);

module.exports = orderdata;
