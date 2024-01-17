const mongoose = require("mongoose");
const URL_MONGO_LOCAL = "mongodb://localhost:27017/ToDos";

const connect = mongoose
    .connect(URL_MONGO_LOCAL)
    .then(() => console.log("Database is connected"))
    .catch((err) => console.log(err));

module.exports = { connect };
