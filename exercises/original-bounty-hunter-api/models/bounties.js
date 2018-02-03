const mongoose = require('mongoose');

const BountySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    living: String,
    bountyAmt: String,
    type: String
});

module.exports = mongoose.model("BountyModel", BountySchema);