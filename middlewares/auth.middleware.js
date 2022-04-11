const authRequire = (req, res, next) => {
    const body = req.body;

    if (body.username !== "Listowel" || body.passward !== "secret"){
        res.send("Invalid credential")
    }

    next();
};

module.exports = {
    authRequire,
    
};
