const { GetUserProf } = require("../Controller/JWT");

const routerAuth = require("express").Router();

routerAuth.route("/Profile").get(GetUserProf);
routerAuth.route("/Profile").post();

module.exports = routerAuth