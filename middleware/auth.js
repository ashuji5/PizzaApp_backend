import jwt from 'jsonwebtoken';

const auth = (req, res, next ) => {

    try {

        const token = req.headers.authorization.split(" ")[1];
        let decodedData;

        if(token){
            decodedData = jwt.verify(token, 'test')
            req.userID = decodedData?.id;
        }

        next();
        
    } catch (error) {
        
    }

}

module.exports = auth;