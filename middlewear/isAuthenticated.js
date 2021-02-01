const isUserAuthenticated = (req, res, next) => {
    const { user } = req;
    if(!user) {
        return res.status(401).send("Unauthorized User")
    } else {
        next();
    };
};

module.exports = isUserAuthenticated;
