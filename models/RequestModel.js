const mongoose = require("mongoose");
const {Schema} = mongoose;

const RequestSchema = new Schema(
    {
        PropertyId: {
            type: Schema.Types.ObjectId,
            ref: 'properties'
        },
        UserId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        comment: String
    },
    { timestamps: true}
);


const Request = mongoose.model("requests", RequestSchema);
module.exports = Request;