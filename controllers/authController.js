const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
    const token = req.header("authorization-token");
    if(!token){
        res.status(401).json({msg: "Access Denied!"});
    }

    try {
        console.log("aqui");
        const tokenSecret = process.env.TOKEN_SECRET;
        const userVerified = jwt.verify(token, tokenSecret);
        req.user = userVerified;
        next();

    } catch (error) {
        res.status(401).json({msg: "Access Denied!"});
    }

}

module.exports = authorization;