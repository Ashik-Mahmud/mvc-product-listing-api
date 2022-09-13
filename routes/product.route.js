const productController = require("../controllers/product.controller");

const router = require("express").Router();

router.post("/save-product", productController.saveProduct)


module.exports = router;