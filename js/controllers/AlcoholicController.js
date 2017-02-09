(function(){
  angular.module('myCocktailApp')

  .controller('AlcoholicDrinks', function ($scope, $location, CocktailFactory) {
    CocktailFactory.getAlcoholicDrinks()
      .then(function (response) {
        $scope.drinksList = response.data.drinks
      })

    $scope.goToDetails = function (id) {
      console.log('Current ID Cocktail = ' + id)
      $location.path('/drink/' + id)
    }
  })

   .controller('NoAlcoholicsDrinks', function ($scope, $location, CocktailFactory) {
     CocktailFactory.getNoAlcoholicDrinks()
      .then(function (response) {
        $scope.drinksList = response.data.drinks
      })

     $scope.goToDetails = function (id) {
       console.log('Current ID Cocktail = ' + id)
       $location.path('/drink/' + id)
     }
   })
})()