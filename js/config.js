  angular.module('myCocktailApp')

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'templates/home.html'
        // controller: 'randomController',
        // controllerAs: 'vm'
      })

      .when('/alcoholics', {
        templateUrl: 'templates/displayList.html',
        controller: 'AlcoholicDrinks',
        controllerAs: 'vm'
      })

      .when('/noAlcoholics', {
        template: 'templates/displayList.html',
        controller: 'NoAlcoholicsDrinks',
        controllerAs: 'vm'
      })

      .when('/drink/:id', {
        templateUrl: 'templates/displayDetail.html',
        controller: 'DetailController',
        controllerAs: 'vm'
      })
      .when('/random', {
        templateUrl: 'templates/displayDetail.html',
        controller: 'randomController',
        controllerAs: 'vm'
      })
      .when('/ingredient', {
        templateUrl: 'templates/displayIngredient.html',
        controller: 'IngredientController',
        controllerAs: 'vm'
      })
            .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
  })
