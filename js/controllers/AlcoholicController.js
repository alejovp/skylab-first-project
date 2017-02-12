(function () {
  angular.module('myCocktailApp')

    .controller('AlcoholicDrinks', alcoholicDrinks)

    .controller('NoAlcoholicsDrinks', noAlcoholicDrinks)

  function alcoholicDrinks ($location, CocktailFactory, $rootScope) {
    var vm = this
    vm.sectionName = 'alcoholic'
    CocktailFactory.getAlcoholicDrinks()
        .then(function (response) {
          vm.drinksList = response.data.drinks
        })

    vm.goToDetails = function (id) {
      $location.path('/drink/' + id)
    }

    $rootScope.$broadcast('eventSectionName', vm.sectionName)
  }

  function noAlcoholicDrinks ($location, CocktailFactory, $rootScope) {
    var vm = this
    vm.sectionName = 'noAlcoholic'
    CocktailFactory.getNoAlcoholicDrinks()
        .then(function (response) {
          vm.drinksList = response.data.drinks
        })

    vm.goToDetails = function (id) {
      $location.path('/drink/' + id)
    }

    $rootScope.$broadcast('eventSectionName', vm.sectionName)
  }
})()
