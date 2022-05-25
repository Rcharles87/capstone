const validationAddToCart = (req, res, next) => {
    const { body } = req;

    next();
}

module.exports = validationAddToCart;