const express = require('express')
const Restaurant = require('./db/models.js')
var parser = require("body-parser")
var mongoose = require("./db/connection")

const app = express()

// var restaurant = mongoose.model

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.set("port", process.env.PORT || 3001);
app.listen(3001, () => {
console.log("Express Started on Port 3001")
})

app.get("/api/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.json(restaurants)
  });
});

  app.get("/", function(req, res){
    res.render("restaurants");
  });


app.get("/api/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.json(restaurant)
  });
});

app.post("/api/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.json(restaurant)
  });
});

app.delete("/api/restaurants/:name", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  });
});

app.put("/api/restaurants/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.json(restaurant)
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
