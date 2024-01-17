const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema({
    description: String,
    isDone: Boolean,
    isImportant: Boolean,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ToDo", ToDoSchema);
