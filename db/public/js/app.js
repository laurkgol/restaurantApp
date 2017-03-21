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
 Candidate
])
.controller("indexCtrl", [
 "Restaurant",
 indexController
])
.controller("showCtrl", [
 "$stateParams",
 "Restaurant",
 showController
])

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

  function Restaurant ($resource) {
  return $resource("/api/restaurants/:name", {}, {
    update: { method: "PUT" }
  });
}

function indexController (Restaurant) {
  this.restaurant = Restaurant.query()
}

function showController ($stateParams, Candidate) {
    this.restaurants = Restaurant.get({name: $stateParams.name})
  }
