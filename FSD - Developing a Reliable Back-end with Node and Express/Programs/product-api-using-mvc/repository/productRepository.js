const { ObjectId } = require("mongodb");

const { getDB } = require("../config/db");

class ProductRepository {

    getCollection() {

        return getDB().collection("products");
    }

    async createProduct(productData) {
        const result = await this.getCollection().insertOne(productData);
        return result;
    }

    async getAllProducts() {
        return await this.getCollection().find().toArray();
    }

    async getProductById(id) {
        return await this.getCollection().findOne({_id: new ObjectId(id)});
    }

    async updateProduct(id, productData) {
        const result =await this.getCollection().updateOne(
                { _id: new ObjectId(id) },
                {
                    $set: productData
                }
            );
        return result;
    }

    async deleteProduct(id) {
        return await this.getCollection().deleteOne({_id: new ObjectId(id)});
    }
}
let productRepository = new ProductRepository();
module.exports = productRepository;