angular
.module("RestaurantApp", [
  "ui.router",
  "ngResource"
])
.config([
   "$stateProvider",
    Router
  ])
.factory("Restaurant", [
 "$resource",
 Restaurant
])
.controller("indexCtrl", [
 "Restaurant",
 indexController
])
.controller("showCtrl", [
 "$stateParams",
 "$state",
 "Restaurant",
 showController
])
// .controller("StudentEditController", [
//     "Restaurant",
//     "$stateParams",
//     "$state",
//     editController
//   ])

function Router($stateProvider) {
    $stateProvider
    .state("welcome", {
      url:'/',
      templateUrl:"/assets/js/ng-views/welcome.html"
    })
    .state("index", {
      url:'/restaurants',
      templateUrl: "/assets/js/ng-views/index.html",
      controller: "indexCtrl",
      controllerAs: "vm"
    })
    .state("show", {
      url: "/restaurants/:name",
      templateUrl: "/assets/js/ng-views/show.html",
      controller: "showCtrl",
      controllerAs: "vm"
    })

  }

  function Restaurant ($resource, $state, $stateParams) {
  return $resource("/api/restaurants/:name", {}, {
    update: { method: "PUT" },
       query: { method: "GET", params: {}, isArray: true },
       get: { method: "GET", params: {}, isArray: false },
       create: {method: "POST", params: {}}
     });
}

function indexController (Restaurant, $state) {
  this.restaurants = Restaurant.query()
  this.restaurant = new Restaurant()
  this.create = function(){
    console.log(this.restaurant)
    this.restaurant.$save()
  }
}

function showController ($stateParams, Restaurant) {
    this.restaurant = Restaurant.get({name: $stateParams.name})
  }

  function newController(Restaurant, $state){
   this.restaurant = new Restaurant()
   this.create = function(){
     this.restaurant.$save().then(function(restaurant){
       $state.go("showCtrl",{name: restaurant.name})
     })
    //  update: { method: "POST" }
   }
  }

  function editController( Restaurant, $stateParams, $state ){
 this.restaurant = Restaurant.get({name: $stateParams.name});
 this.update = function(){
   this.restaurant.$update({name: $stateParams.name}).then(function(restaurant){
     $state.go("indexCtrl",{name: restaurant.name})
   })
   console.log("student updated")
 }
 }
