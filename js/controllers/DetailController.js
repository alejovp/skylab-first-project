angular.module('myCocktailApp')

.controller('DetailController', function ($scope, DetailFactory, $routeParams) {
  DetailFactory.getDetail($routeParams.id)
        .then(function (response) {
          var resultDrink = response.data.drinks[0]
          $scope.cocktail = resultDrink
          console.log(response.data.drinks)
          // Push the ingredients into an Array
          var ingArray = []
          var measuresArray = []
          for (var i = 1; i < 15; i++) {
            if (resultDrink['strIngredient' + i]) {
              ingArray.push(resultDrink['strIngredient' + i])
              measuresArray.push(resultDrink['strMeasure' + i])
            }
          }
          console.log(ingArray)
          console.log(measuresArray)
        })
})
