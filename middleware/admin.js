const jwt = require('jsonwebtoken');

const adminauth = (req, res, next ) => {

    try {

        const role = req.headers.role;

        let decodedData;

        if(role == "admin"){
            decodedData = jwt.verify(token, 'test')
            
        }

        next();
        
    } catch (error) {
        
    }

}

module.exports = adminauth;