const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({  
    name: String,
    color: String,
    size: String,
    price: String
});

module.exports = mongoose.model("InventoryModel", InventorySchema);
