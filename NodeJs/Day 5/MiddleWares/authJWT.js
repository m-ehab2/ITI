const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        console.log('Started');
        const decoded = jwt.verify(token, process.env.sKey);
        console.log(decoded.userName);
        req.header.userId = decoded.userName;
        console.log(req.header.userId);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;