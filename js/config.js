  angular.module('myCocktailApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'templates/displayDetail.html',
        controller: 'randomController'
      })

      .when('/alcoholics', {
        templateUrl: 'templates/displayList.html',
        controller: 'AlcoholicDrinks'
        controllerAs: 'vm'
      })

      .when('/noAlcoholics', {
        template: 'templates/displayList.html',
        controller: 'NoAlcoholicsDrinks'
      controllerAs: 'vm'
      })

      .when('/drink/:id', {
        templateUrl: 'templates/displayDetail.html',
        controller: 'DetailController'
        controllerAs: 'vm'
      })
      .when('/random', {
        template: 'templates/displayDetail.html',
        controller: 'randomController'
      })
      .when('/ingredient', {
        templateUrl: 'templates/displayIngredient.html',
        controller: 'IngredientController'
      })
  })
