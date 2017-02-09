(function(){
  angular.module('myCocktailApp')

  .controller('AlcoholicDrinks', function ($location, CocktailFactory) {
    var vm = this
    CocktailFactory.getAlcoholicDrinks()
      .then(function (response) {
        vm.drinksList = response.data.drinks
      })

    vm.goToDetails = function (id) {
      console.log('Current ID Cocktail = ' + id)
      $location.path('/drink/' + id)
    }
  })

   .controller('NoAlcoholicsDrinks', function ($location, CocktailFactory) {
     var vm = this
     CocktailFactory.getNoAlcoholicDrinks()
      .then(function (response) {
        vm.drinksList = response.data.drinks
      })

     vm.goToDetails = function (id) {
       console.log('Current ID Cocktail = ' + id)
       $location.path('/drink/' + id)
     }
   })
})()