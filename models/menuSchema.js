const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({

    heading : {
        type : String,
        required : true,
        
    },

    desc : {
        type : String,
        required : true,
        
    },

    img : {

        type : String,
        required : true,
        

    },

    price : {
        type : Number,
        required : true
    }

})

const menudata = new mongoose.model("menu", menuSchema);

module.exports = menudata;