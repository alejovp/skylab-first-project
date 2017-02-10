(function () {
  angular.module('myCocktailApp')

    .controller('DetailController', function (DetailFactory, $routeParams) {
      var vm = this
      DetailFactory.getDetail($routeParams.id)
            .then(function (response) {
              var resultDrink = response.data.drinks[0]
              if (resultDrink.strDrinkThumb === null) {
                resultDrink.strDrinkThumb = '../../img/noImage.png'
              }
              vm.cocktail = resultDrink
              var aIngAndMeasure = []
              for (var i = 1; i < 15; i++) {
                if (resultDrink['strIngredient' + i]) {
                  aIngAndMeasure.push([resultDrink['strIngredient' + i], resultDrink['strMeasure' + i]])
                }
              }

              vm.ingAndMeasures = aIngAndMeasure
            })
    })
})()
