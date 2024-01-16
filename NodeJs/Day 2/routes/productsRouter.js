const router = require("express").Router();
const { getProducts, postProducts, patchProducts, deleteProducts } = require("../controllers/productsControler");

router.route("/").get(getProducts).post(postProducts);
router.route("/:id").patch(patchProducts).delete(deleteProducts);

module.exports = router;
