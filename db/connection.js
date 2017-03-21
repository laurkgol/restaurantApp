var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restaurants");

module.exports = mongoose;
