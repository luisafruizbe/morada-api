const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema(
    {
        name: String, 
        idType: String,
        document: String,
        email: {
            type: String,
            unique: true,
            required: true    
        },
        password: {
            type: String,
            required: true
        },
        phone: String,
        role: {
            type: Number,
            default: 1
        }
    
    },
    { timestamps: true}
);

const User = mongoose.model("users", UserSchema);

module.exports = User;