const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

mongoose.connect("mongodb://localhost/rantaupanjang")

const Place = require("./models/Place")
const Comment = require("./models/Comment")

// GET ALL PLACES

app.get("/places", async (req,res)=>{

const places = await Place.find()

res.json(places)

})


// ADD PLACE (admin)

app.post("/place", async (req,res)=>{

const place = new Place(req.body)

await place.save()

res.json(place)

})


// LIKE

app.post("/like/:id", async (req,res)=>{

const ip = req.ip

const place = await Place.findById(req.params.id)

if(place.likes.includes(ip)){

return res.json({message:"already liked"})

}

place.likes.push(ip)

await place.save()

res.json(place)

})


// COMMENT

app.post("/comment/:id", async (req,res)=>{

const count = await Comment.countDocuments({placeId:req.params.id})

const comment = new Comment({

placeId:req.params.id,
text:req.body.text,
number:count+1

})

await comment.save()

res.json(comment)

})


app.listen(3000,()=>{

console.log("Server running")

})