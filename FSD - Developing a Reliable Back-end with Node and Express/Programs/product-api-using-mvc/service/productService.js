const productRepository =require("../repository/productRepository");

class ProductService {

    async addProduct(productData) {

        return await productRepository.createProduct(productData);
    }

    async fetchProducts() {

        return await productRepository.getAllProducts();
    }

    async fetchProduct(id) {

        return await productRepository.getProductById(id);
    }

    async modifyProduct(id, productData) {

        return await productRepository.updateProduct(id, productData);
    }

    async removeProduct(id) {

        return await productRepository.deleteProduct(id);
    }
}
let productService = new ProductService();
module.exports = productService;