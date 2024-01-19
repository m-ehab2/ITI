const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("ToDo", ToDoSchema);
