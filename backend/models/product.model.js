import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        min: 0,
        required: true
    },
    image:{
        type: String,
        required: [true, "Image is required"]
    },
    stock: {
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
},{timestamps: true});


const Product = mongoose.model("Product", productSchema);

export default Product;