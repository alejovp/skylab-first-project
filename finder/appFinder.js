angular.module('myCocktailApp', ['ngRoute'])

  .factory('cocktailFactory', function ($http) {
    function getAlcoholicDrinks () {
      var url = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
      return $http.get(url)
    }

    function getNoAlcoholicDrinks () {
      var url = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
      return $http.get(url)
    }

    return {
      getAlcoholicDrinks: getAlcoholicDrinks,
      getNoAlcoholicDrinks: getNoAlcoholicDrinks
    }
  })

  .controller('AlcoholicDrinks', function ($scope, $location, cocktailFactory) {
    cocktailFactory.getAlcoholicDrinks()
      .then(function (response) {
        // $scope.alcoholicDrinks = response.data.drinks
        console.log(response.data.drinks)
        $scope.drinksList = response.data.drinks
      })

    $scope.doSomething = function (id) {
      console.log('Current ID Cocktail = ' + id)
      $location.path('/drink/' + id)
      // cocktailFactory.getCocktailIngredients(id)
      //   .then( function(response) {} )
    }
  })

  .controller('NoAlcoholicsDrinks', function ($scope, cocktailFactory) {
    cocktailFactory.getNoAlcoholicDrinks()
      .then(function (response) {
        // $scope.noAlcoholicDrinks = response.data.drinks
        // console.log(noAlcoholicDrinks)
        $scope.drinksList = response.data.drinks
      })
  })
  .controller('AnotherController', function ($scope, $routeParams) {
    $scope.id = $routeParams.id
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'template.html',
        controller: 'AlcoholicDrinks'
      })
      .when('/drink/:id', {
        templateUrl: 'another-template.html',
        controller: 'AnotherController'
      })
      .when('/alcoholics', {
        template: '<ul class="list-group"><li ng-repeat="drink in drinksList | filter:userInput" type="button" class="list-group-item list-inline col-md-4">{{drink.strDrink}}</li></ul>',
        controller: 'AlcoholicDrinks'
      })
      .when('/noAlcoholics', {
        template: '<ul class="list-group"><li ng-repeat="drink in drinksList | filter:userInput" type="button" class="list-group-item list-inline col-md-4">{{drink.strDrink}}</li></ul>',
        controller: 'NoAlcoholicsDrinks'
      })
  })
