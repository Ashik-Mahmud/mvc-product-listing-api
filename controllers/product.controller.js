const { productModel } = require("../models/model");

const saveProduct =  async(req, res, next) => {

    
    try {
        const data = req.body;
        const newProduct = await productModel.create(data)
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

module.exports = { saveProduct }