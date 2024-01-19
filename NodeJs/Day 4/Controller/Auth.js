const { log } = require("console");
const User = require("../Models/User");
var bcrypt = require('bcryptjs');

async function SignInHandler(req, res, next) {
    try {
        const { userName, password } = req.body;
        let DBUser = await User.findOne({ userName: userName })
        if (DBUser === null) {
            throw 'User Not Found in DB'
        }
        let isUser = await bcrypt.compare(password, DBUser.password);
        if (!isUser) {
            throw 'Wrong Password';
        }
        res.json({
            status: "success",
            message: "User Is Valid",
            data: req.body.userName,
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}
async function SignUpHandler(req, res, next) {
    try {
        const { userName, password } = req.body;
        let hashedPassword = await bcrypt.hash(password, 2);
        await User.create({ userName: userName, password: hashedPassword });
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
async function Getter(req, res) {
    try {
        const Users = await User.find();
        res.json({
            status: "success",
            message: "User Is Added",
            data: Users,
        });
    } catch (error) {
        next(error)
    }

}
module.exports = { SignInHandler, SignUpHandler, Getter }