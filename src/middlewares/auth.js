const { verifyToken } = require('../utils/jwt');

const authenticate = (req, res, next) => {
    try{
        const authHeader= req.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({message : 'No Token Provided'});
        }
        const token= authHeader.split(' ')[1];
        const decoded= verifyToken(token);
        req.user= decoded;
        next();
    } catch (error) {
        return res.status(401).json({message : 'Invalid Token'});
    }
}

module.exports= authenticate;