const express = require('express')
const Restaurant = require('./db/models.js')

const app = express()


app.listen(3001, () => {
console.log("Express Started on Port 3001")
})

app.get("/restaurants", (req, res) => {
  Restaurant.find({})
})

app.get("/restaurants/:name", (req, res) => {
  Restaurant.findOne({name: req.params.name})
})
