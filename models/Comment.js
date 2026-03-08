const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({

placeId:String,
text:String,
number:Number

})

module.exports = mongoose.model("Comment",CommentSchema)