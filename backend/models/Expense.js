const mongoose = require("mongoose");
// create schema

const userSchema = new mongoose.Schema({
    item: String,
    price: Number,
    date: Date
});

module.exports = mongoose.model("expense", userSchema);
