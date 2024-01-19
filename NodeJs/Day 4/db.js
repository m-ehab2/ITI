const mongoose = require("mongoose");
const URL_MONGO_LOCAL = "mongodb://localhost:27017/Users";

const connect = (URI) => {
    mongoose
        .connect(URI)
        .then(() => console.log("Database is connected"))
        .catch((err) => console.log(err));
}

module.exports = { connect };
