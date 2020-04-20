const jwt = require('jsonwebtoken');
const models = require('../models/user');

var authService = {
    signUser: function(user) {
        const token = jwt.sign(
            {
                email: user.email,
                userType: user.userType
            },
            'secretkey',
            {
                expiresIn: '1h'
            }
        );
        return token;
    },
    verifyUser: function (token) {
        try {
            let decoded = jwt.verify(token, 'secretkey');
            return models.User.findByPk(decoded.userId, decoded.userType);
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

module.exports = authService;