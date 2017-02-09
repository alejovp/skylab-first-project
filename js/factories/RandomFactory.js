(function(){
angular.module('myCocktailApp')

  .factory('RandomFactory', function ($http) {
    function getRandom () {
      var url = 'http://www.thecocktaildb.com/api/json/v1/1/random.php'
      return $http.get(url)
    }
    return {
      getRandom: getRandom
    }
  })
})()