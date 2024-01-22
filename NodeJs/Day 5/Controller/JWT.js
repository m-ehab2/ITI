const User = require("../Models/User");
const jwt = require('jsonwebtoken');

async function GetUserProf(req, res, next) {
    try {
        const userName = req.header.userId;
        console.log(userName);
        let DBUser = await User.findOne({ userName: userName });
        res.json({
            status: "Success",
            message: 'User is Authenticated by JWT',
            data: DBUser
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}
async function UpdateUserProf(req, res, next) {
    try {
        const { userName, password, role } = req.body;
        console.log(role);
        let hashedPassword = await bcrypt.hash(password, 2);
        await User.findOneAndUpdate({ userName: userName }, { password: hashedPassword, role: role });
        res.json({
            status: "success",
            message: "User Is Added",
            data: req.body.userName,
        });
    } catch (error) {
        console.log(error.name)
        next(error)
    }
}
module.exports = { GetUserProf, UpdateUserProf }