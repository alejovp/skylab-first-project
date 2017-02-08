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
      })

      .when('/noAlcoholics', {
        template: 'templates/displayList.html',
        controller: 'NoAlcoholicsDrinks'
      })

      .when('/drink/:id', {
        templateUrl: 'templates/displayDetail.html',
        controller: 'DetailController'
      })
      .when('/random', {
        template: 'templates/displayDetail.html',
        controller: 'randomController'
      })
  })
