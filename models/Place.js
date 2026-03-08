const mongoose = require("mongoose")

const PlaceSchema = new mongoose.Schema({

name:String,
category:String,
description:String,
image:String,
location:String,
likes:[String]

})

module.exports = mongoose.model("Place",PlaceSchema)