angular.module('detailCocktail', [])

  .factory('DetailFactory', function ($http) {
    function getRandom () {
      var url = 'http://www.thecocktaildb.com/api/json/v1/1/random.php'
      return $http.get(url)
    }
    return {
      getRandom: getRandom
    }
  })

  .controller('randomController', function ($scope, DetailFactory) {
    DetailFactory.getRandom()
      .then(function (response) {
        $scope.randomDrink = response.data.drinks
        console.log(response.data.drinks)
      })
  })
