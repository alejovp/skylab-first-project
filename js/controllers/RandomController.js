(function(){
angular.module('myCocktailApp')

  .controller('randomController', function (RandomFactory) {
    var vm = this
    RandomFactory.getRandom()
      .then(function (response) {
        var resultDrink = response.data.drinks[0]
         if (resultDrink.strDrinkThumb === null){
            resultDrink.strDrinkThumb = '../img/noImage.png'
          }
        vm.cocktail = resultDrink
        console.log(response.data.drinks)
        
      // Push the ingredients and measures into an Array
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