const { productModel } = require("../models/model")

/* Add New Product */
exports.addNewProduct = async(data) =>{
    return await productModel.create(data)
}

/* Get All the products */
exports.getAllProducts = async(limit) => {
    return await productModel.find({}).limit(limit)
}

/* Update Product By Id */
exports.updateProductById = async(id, data) => {
    return await productModel.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}

/* Delete product by ID */
exports.deleteProductById = async(id) => {
    return await productModel.findByIdAndDelete(id)
}