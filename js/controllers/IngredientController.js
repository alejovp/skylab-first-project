  angular.module('myCocktailApp')

  .controller('IngredientController', function($scope, $location, IngredientFactory) {

      $scope.searchIngredient = function(ingredient) {

          IngredientFactory.getByIngredient(ingredient)
              .then(function(response) {
                  $scope.drinksList = response.data.drinks
              })


          $scope.goToDetails = function(id) {
              console.log('Current ID Cocktail = ' + id)
              $location.path('/drink/' + id)
          }
      }
  })
