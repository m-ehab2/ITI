const ToDo = require("../models/ToDo.js");
const joi = require("joi");

const Schema = joi.object({
    title: joi.string().required(),
    description: joi.string(),
    isDone: joi.boolean(),
    isImportant: joi.boolean(),
});

async function getController(req, res, next) {
    try {
        const products = await ToDo.find();
        if (req.url == "/") {
            res.json({
                status: "success",
                message: "Data is served",
                data: products,
            });
        }
    } catch (error) {
        next(error);
    }
}

async function postController(req, res, next) {
    try {
        await Schema.validateAsync(req.body);
        await ToDo.create(req.body);
        res.json({
            message: "data have been posted",
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}

async function getOne(req, res, next) {
    try {
        const item = await ToDo.find({ _id: req.params.id })
        if (item.length < 1) {
            throw ("This is an invalid ID")
        }
        res.json({
            status: "success",
            message: "One Item is served",
            data: item,
        });
    } catch (error) {
        console.log('---------' + error.name + '----------' + error);
        next(error);
    }
}
async function deleteOne(req, res, next) {
    try {
        const item = await ToDo.find({ _id: req.params.id })
        if (item.length < 1) {
            throw ("This is an invalid ID")
        }
        await ToDo.findByIdAndDelete(req.params.id)
        res.json({
            status: "success",
            message: "One Item is Deleted",
        });
    } catch (error) {
        next(error);
    }
}

async function patchOne(req, res, next) {
    try {
        const item = await ToDo.find({ _id: req.params.id })
        if (item.length < 1) {
            throw ("This is an invalid ID")
        }
        await ToDo.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.json({
            status: "success",
            message: "One Item is Patched",
        });
    } catch (error) {
        next(error)
    }
}
module.exports = { getController, postController, deleteOne, patchOne, getOne };
