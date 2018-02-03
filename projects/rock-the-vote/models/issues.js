const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: Number,
    downvotes: Number,
    totalVotes: Number,
    comments: [String]
});

module.exports = mongoose.model("Issue", IssueSchema);