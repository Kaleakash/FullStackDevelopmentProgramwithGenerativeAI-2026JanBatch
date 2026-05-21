const express = require("express");

const router = express.Router();    // router reference. 

const productController =require("../controller/productController");

router.post(
    "/store",
    productController.createProduct
);

router.get(
    "/findAll",
    productController.getProducts
);

router.get(
    "/findById/:id",
    productController.getProductById
);

router.put(
    "/update/:id",
    productController.updateProduct
);

router.delete(
    "/delete/:id",
    productController.deleteProduct
);

module.exports = router;