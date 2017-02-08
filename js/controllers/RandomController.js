angular.module('myCocktailApp')

  .controller('randomController', function ($scope, RandomFactory) {
    RandomFactory.getRandom()
        .then(function (response) {
          $scope.cocktail = response.data.drinks[0]
          console.log(response.data.drinks)
        })
  })
