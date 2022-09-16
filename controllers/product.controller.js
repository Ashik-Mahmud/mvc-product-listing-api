const { addNewProduct, getAllProducts, updateProductById, deleteProductById } = require("../services/product.services");

const saveProduct =  async(req, res, next) => {

   
    try {
        const data = req.body;
        const newProduct = await addNewProduct(data)
        if(newProduct.quantity == 0){
            newProduct.status = "out-of-stock"
        }
        res.send({
            success: true,
            message: "Saved Product",
            data: newProduct
        })

        
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
    
}


const getProduct = async(req, res, next) => {
    try {
        const products = await getAllProducts(10);
        res.send({
            success: true,
            message: "Products",
            data: products
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}

const updateProduct = async(req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = await updateProductById(id, data);
        res.send({
            success: true,
            message: "Updated Product",
            data: product
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}

const deleteProduct = async(req, res, next) => {
    try {
        const id = req.params.id;
        const product = await deleteProductById(id);
        res.send({
            success: true,
            message: "Deleted Product",
            data: product
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { saveProduct, getProduct, updateProduct,deleteProduct }