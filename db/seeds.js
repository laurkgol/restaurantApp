const models = require('./models.js')
const Restaurant = models.Restaurant

const seedData = require('./seeds.json')

Restaurant.remove({}, () => {
  Restaurant.create(seedData, () => {
    process.exit()
  })
})
