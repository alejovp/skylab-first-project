  angular.module('myCocktailApp')


  .controller('AlcoholicDrinks', function ($scope, $location, CocktailFactory) {
    CocktailFactory.getAlcoholicDrinks()
      .then(function (response) {
        // $scope.alcoholicDrinks = response.data.drinks
       // console.log(response.data.drinks)
        $scope.drinksList = response.data.drinks
      })

    $scope.doSomething = function (id) {
      console.log('Current ID Cocktail = ' + id)
      $location.path('/drink/' + id)
      // CocktailFactory.getCocktailIngredients(id)
      //   .then( function(response) {} )
    }
  })

   .controller('NoAlcoholicsDrinks', function ($scope, CocktailFactory) {
    CocktailFactory.getNoAlcoholicDrinks()
      .then(function (response) {
        // $scope.noAlcoholicDrinks = response.data.drinks
        // console.log(noAlcoholicDrinks)
        $scope.drinksList = response.data.drinks
      })
       $scope.doSomething = function (id) {
      console.log('Current ID Cocktail = ' + id)
      $location.path('/drink/' + id)
      // CocktailFactory.getCocktailIngredients(id)
      //   .then( function(response) {} )
    }
  })