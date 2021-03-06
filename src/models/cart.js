const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User',required: true},
    cartItems:[
        {
            product: { type: mongoose.Schema.Types.ObjectId,ref:'Product', required: true},
            quantity: {type: Number, Default:'1' },
            price:{type: Number , required: true }
        }
    ]
},{timestamps: true});

module.exports = mongoose.model('cart',CartSchema) 