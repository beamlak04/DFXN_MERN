import Product from "../models/product.model.js";

export const addToCart = async(req, res) => {
    try {
        const {productId} = req.body;
        const user = req.user;

        const existingItem = user.cartItems.find(item => item.id === productId);
        if(existingItem){
            existingItem.quantity += 1;
        }else{
            user.cartItems.push(productId)
        }

        await user.save();
        res.json(user.cartItems);
    } catch (error) {
        console.log("error in addToCart", error.message);
        res.status(500).json({message: error.message})
    }
}

export const deleteProductFromCart = async(req, res) => {
    try {
        const {productId} = req.body;
        const user = req.user;

        if(!productId){
            user.cartItems = [];
        }else{
            user.cartItems = user.cartItems.filter(item => item.id !== productId);
        }

        await user.save;
        res.json(user.cartItems);

    } catch (error) {
        console.log("error in deleteProductFromCart", error.message);
        res.status(500).json({message: error.message})
    }
}

export const getCartProducts = async(req, res) => {
    try {
        const products = await Product.find({_id: {$in: req.user.cartItems}});
        
        const cartItems = products.map(product => {
            const item = req.user.cartItems.find(cartItem => cartItem.id === product.id)
            return {...product.toJSON(), quantity: item.quantity}
        })
        res.json(cartItems);
    } catch (error) {
        console.log("error in getCartProducts", error.message);
        res.status(500).json({message: error.message})
    }
}

export const updateProductQuantity = async(req, res) => {
    try {
        const {id: productId} = req.params;
        const {quantity} = req.body;
        const user = req.user;
        const existingItem = user.CartItems.find(item => item.id === productId);

        if(existingItem){
            if(quantity === 0){
                user.cartItems = user.cartItems.filter(item => item.id !== productId);
                await user.save();
                return res.json(user.cartItems);
            }

            existingItem.quantity = quantity;
            await user.save();
            return res.json(user.cartItems);
        }else{
            res.status(404).json({message: "Product not found"});
        }

    } catch (error) {
        console.log("error in updateProductQuantity ", error.message);
        res.status(500).json({message: error.message}) 
    }
}