angular.module('myCocktailApp')

.controller('DetailController', function ($scope, DetailFactory, $routeParams) {
  DetailFactory.getDetail($routeParams.id)
        .then(function (response) {
          $scope.cocktail = response.data.drinks
          console.log($routeParams.id)
          console.log(response.data.drinks)
        })

  $scope.getIngredients = function (obj) {
    var ingArray = []
    for (var i = 1; i < 15; i++) {
      ingArray.push(obj['strIngredient' + i])
    }
    console.log(ingArray)
    return ingArray
  }
})
