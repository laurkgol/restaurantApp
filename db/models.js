const mongoose = require('./connection.js')

const RestaurantSchema = new mongoose.Schema({
  name: String,
  type: String
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
  Restaurant: Restaurant
}
