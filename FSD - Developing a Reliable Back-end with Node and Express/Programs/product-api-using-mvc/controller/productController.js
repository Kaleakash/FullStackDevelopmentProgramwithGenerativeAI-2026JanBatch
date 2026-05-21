const productService =
    require("../service/productService");

class ProductController {

    async createProduct(req, res) {

        try {

            const product = {

                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                quantity: req.body.quantity
            };

            const result = await productService.addProduct(product);

            res.status(201).json({

                success: true,
                message: "Product Created Successfully",
                insertedId: result.insertedId
            });

        } catch (error) {

            res.status(500).json({

                success: false,
                message: error.message
            });
        }
    }

    async getProducts(req, res) {

        try {

            const products = await productService.fetchProducts();

            res.status(200).json({

                success: true,
                data: products
            });

        } catch (error) {

            res.status(500).json({

                success: false,
                message: error.message
            });
        }
    }

    async getProductById(req, res) {

        try {

            const product = await productService.fetchProduct(req.params.id);

            if (!product) {

                return res.status(404).json({

                    success: false,
                    message: "Product Not Found"
                });
            }

            res.status(200).json({

                success: true,
                data: product
            });

        } catch (error) {

            res.status(500).json({

                success: false,
                message: error.message
            });
        }
    }

    async updateProduct(req, res) {

        try {

            const result =
                await productService.modifyProduct(
                    req.params.id,
                    req.body
                );

            if (result.matchedCount === 0) {

                return res.status(404).json({

                    success: false,
                    message: "Product Not Found"
                });
            }

            res.status(200).json({

                success: true,
                message: "Product Updated Successfully"
            });

        } catch (error) {

            res.status(500).json({

                success: false,
                message: error.message
            });
        }
    }

    async deleteProduct(req, res) {

        try {

            const result =
                await productService.removeProduct(req.params.id);

            if (result.deletedCount === 0) {

                return res.status(404).json({

                    success: false,
                    message: "Product Not Found"
                });
            }

            res.status(200).json({

                success: true,
                message: "Product Deleted Successfully"
            });

        } catch (error) {

            res.status(500).json({

                success: false,
                message: error.message
            });
        }
    }
}
let productController = new ProductController();
module.exports = productController;