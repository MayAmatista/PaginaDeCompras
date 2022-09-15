const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image:{
        type: String,
        require: true
    },
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)