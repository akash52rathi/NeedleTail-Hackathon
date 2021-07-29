const jwt  = require('jsonwebtoken');
const config =require('config')


module.exports = function(req,res,next){

    const token = req.header('x-auth-token');

    /// check if not token 


    if(!token){

        return res.status(401).json({msg:"no token authorization denied"});

    }

    try{
        const decode = jwt.verify(token,config.get('jwtSecret'));

        req.user =decode.user;
        next();

    }
    catch(err)
    {
        res.status(401).json({msg:"toekn is not valid"});

    }


}