const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided. Login to continue.'
        });
    }

    try {
        const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userInfo = decodedTokenInfo;
        next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Access denied. No token provided. Login to continue.',
            error: err.message
        });
    }
};

module.exports = authMiddleware;