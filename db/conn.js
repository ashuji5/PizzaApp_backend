const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pizzaweb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection to the databse successfull..."))
    .catch((err) => console.log("Can't connect to database"));
