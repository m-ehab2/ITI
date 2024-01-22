const { SignInHandler, SignUpHandler, Getter } = require("../Controller/Auth");

const router = require("express").Router();

router.route("/SignIn").post(SignInHandler).get(Getter);
router.route("/SignUp").post(SignUpHandler).get(Getter);
module.exports = router