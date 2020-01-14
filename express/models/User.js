const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: { //Basic user, admin or company
        type: Number,
        required: true
    },
    userMoney: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Users", UserSchema);