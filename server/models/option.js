const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: [true, "Please enter an option."],
        minLength: [4, "Please ensure your option is of at least four characters"]
    },
    likes:{
        type: Number,
        required: true,
        default: 0
    },
    _poll: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Poll'
    }
}, {timestamps: true})

const Option = mongoose.model('Option', OptionSchema)
