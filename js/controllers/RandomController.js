angular.module('myCocktailApp')

  .controller('randomController', function ($scope, RandomFactory) {
    RandomFactory.getRandom()
      .then(function (response) {
        var resultDrink = response.data.drinks[0]
         if (resultDrink.strDrinkThumb === null){
            resultDrink.strDrinkThumb = '../img/noImage.png'
          }
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
        console.log(aMeasure)
      })
  })
