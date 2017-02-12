(function () {
  angular.module('myCocktailApp')

    .controller('IngredientController', ingredientController)

  function ingredientController ($location, IngredientFactory, $rootScope) {
    var vm = this
    vm.sectionName = 'ingredient'
    vm.searchIngredient = function (ingredient) {
      IngredientFactory.getByIngredient(ingredient)
        .then(function (response) {
          vm.drinksList = response.data.drinks
        })
    }

    vm.goToDetails = function (id) {
      $location.path('/drink/' + id)
    }

    $rootScope.$broadcast('eventSectionName', vm.sectionName)
  }
})()
