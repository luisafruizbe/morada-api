const mongoose = require("mongoose");
const {Schema} = mongoose;

const FavoriteSchema = new Schema(
    {
        PropertyId: {
            type: Schema.Types.ObjectId,
            ref: 'properties'
        },
        UserId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true}
);


const Favorite = mongoose.model("favorites",PropertySchema);

module.exports = Favorite;