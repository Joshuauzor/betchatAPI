const jwt = require('jsonwebtoken');
let verifyToken = (req, res, next) => {
    // get auth header value
    const bearerHeader = req.headers['authorization'];
    // check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //Split at the space
        const bearer = bearerHeader.split(' ');
        //get token from array  
        const bearerToken = bearer[1];
        // set token
        req.token = bearerToken;
        // next middleware
        jwt.verify(req.token, process.env.JWT_SECRET_TOKEN, function(err, result) {
            if (err)
                res.status(500).json({ "error": "Unauthorised request" });
            req.user = result.user;
            next();
        });
    } else {
        return res.sendStatus(403);
    }
}


module.exports = { verifyToken }