const ToDo = require("../models/ToDos.js");

async function getController(req, res) {
    const products = await ToDo.find();
    if (req.url == "/") {
        res.json({
            status: "success",
            message: "Data is served",
            data: products,
        });
    }
}

async function postController(req, res) {
    await ToDo.create(req.body);
    res.json({
        message: "data have been posted",
    });
}

async function getOne(req, res) {
    console.log(req.params.id);
    const item = await ToDo.find({ _id: req.params.id })
    console.log(item);
    res.json({
        status: "success",
        message: "One Item is served",
        data: item,
    });
}
async function deleteOne(req, res) {
    await ToDo.findByIdAndDelete(req.params.id)
    res.json({
        status: "success",
        message: "One Item is Deleted",
        // data: item,
    });
}

async function patchOne(req, res) {
    await ToDo.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.json({
        status: "success",
        message: "One Item is Patched",
        // data: item,
    });
}
module.exports = { getController, postController, deleteOne, patchOne, getOne };
