var mongoose = require("mongoose");

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    type: String
  }
)

mongoose.model("Restaurant",RestaurantSchema);
mongoose.connect("mogodb://localhost/restaurants");

module.exports = mongoose;
