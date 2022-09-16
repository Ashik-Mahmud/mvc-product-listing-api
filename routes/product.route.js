const productController = require("../controllers/product.controller");

const router = require("express").Router();

router.post("/product", productController.saveProduct)
router.get("/products", productController.getProduct);
router.patch("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);


module.exports = router;