  angular.module('myCocktailApp')

  .config(function ($routeProvider) {
    $routeProvider
      .when('/alcoholics', {
        templateUrl: 'templates/displayList.html',
        controller: 'AlcoholicDrinks'
      })
      .when('/drink/:id', {
        templateUrl: 'templates/displayDetail.html',
        controller: 'DetailController'
      })
      // .when('/alcoholics', {
      //   template: '<ul class="list-group"><li ng-repeat="drink in drinksList | filter:userInput" type="button" class="list-group-item list-inline col-md-4">{{drink.strDrink}}</li></ul>',
      //   controller: 'AlcoholicDrinks'
      // })
      .when('/noAlcoholics', {
        template: '<ul class="list-group"><li ng-repeat="drink in drinksList | filter:userInput" type="button" class="list-group-item list-inline col-md-4">{{drink.strDrink}}</li></ul>',
        controller: 'NoAlcoholicsDrinks'
      })
  })
