  (function(){
  angular.module('myCocktailApp')

  .controller('IngredientController', function($location, IngredientFactory) {
    var vm = this
      vm.searchIngredient = function(ingredient) {

          IngredientFactory.getByIngredient(ingredient)
              .then(function(response) {
                  vm.drinksList = response.data.drinks
              })


          vm.goToDetails = function(id) {
              console.log('Current ID Cocktail = ' + id)
              $location.path('/drink/' + id)
          }
      }
  })
})()