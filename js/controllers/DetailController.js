angular.module('myCocktailApp')

.controller('DetailController', function ($scope, DetailFactory, $routeParams) {
  DetailFactory.getDetail($routeParams.id)
    .then(function (response) {
      var resultDrink = response.data.drinks[0]
      $scope.cocktail = resultDrink
      console.log(response.data.drinks)

      // Push the ingredients and measures into an Array
      var aIngredient = []
      var aMeasure = []
      for (var i = 1; i < 15; i++) {
        if (resultDrink['strIngredient' + i]) {
          aIngredient.push(resultDrink['strIngredient' + i])
          aMeasure.push(resultDrink['strMeasure' + i])
        }
      }

      $scope.ingredients = aIngredient
      $scope.measures = aMeasure
    })
})
