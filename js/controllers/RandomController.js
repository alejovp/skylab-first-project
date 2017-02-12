(function () {
  angular.module('myCocktailApp')

    .controller('randomController', randomCocktail)

  function randomCocktail (RandomFactory, $rootScope) {
    var vm = this
    vm.sectionName = ''
    RandomFactory.getRandom()
      .then(function (response) {
        var resultDrink = response.data.drinks[0]
        if (resultDrink.strDrinkThumb === null) {
          resultDrink.strDrinkThumb = '../img/noImage.png'
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

    $rootScope.$broadcast('eventSectionName', vm.sectionName)
  }
})()
