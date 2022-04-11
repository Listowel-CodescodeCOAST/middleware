const login = ( req, res) => {
    res.send("Login Successfull");
};

const register = (req, res) => {
    res.send("Registation Successful");
};

module.exports = {
    register,
    login,
};