const router = require("express").Router();
const { getController, postController, deleteOne, patchOne, getOne } = require("../controllers/homeController");

router.route("/").get(getController).post(postController);
router.route("/:id").get(getOne).patch(patchOne).delete(deleteOne)

module.exports = router;
