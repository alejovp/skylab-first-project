angular.module('myCocktailApp')

.controller('DetailController', function ($scope, DetailFactory, $routeParams) {
  DetailFactory.getDetail($routeParams.id)
    .then(function (response) {
      var resultDrink = response.data.drinks[0]
      $scope.cocktail = resultDrink
      console.log(response.data.drinks)

      // Push the ingredients and measures into an Array
      var aIngAndMeasure = []
      for (var i = 1; i < 15; i++) {
        if (resultDrink['strIngredient' + i]) {
          aIngAndMeasure.push([resultDrink['strIngredient' + i], resultDrink['strMeasure' + i]])
        }
      }

      $scope.ingAndMeasures = aIngAndMeasure

      console.log(aIngAndMeasure)
    })
})
