const mongoose = require('mongoose');

const FeedBackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Feedback = mongoose.model('Feedback', FeedBackSchema);

module.exports = Feedback;
