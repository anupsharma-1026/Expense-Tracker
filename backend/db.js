const mongoose = require("mongoose");

// mongodb://localhost:1/Addvic

mongoose.connect("mongodb://localhost:27017/Addvic")

module.exports=mongoose;