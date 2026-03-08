const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({

title:String,
content:String,
image:String,
likes:[String]

})

module.exports = mongoose.model("Post",PostSchema)