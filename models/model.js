var mongoose = require('mongoose');

/* Product Schema */

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        min: 0
    },
    unit:{
        type: String,
        enum: ['kg', 'ltr', 'piece'],
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['in-stock', 'out-of-stock', 'discontinued'],
        required: true,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",

    }
}, {
    timestamps: true
})


const productModel = mongoose.model("ProductModel", productSchema);

module.exports = {productModel};