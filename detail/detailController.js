angular.module('detailCocktail', [])
  
.factory('DetailFactory', function($http) {

  var cocktailId = '15112'
    function getDetail() {
        var url = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=<%COCKTAIL-ID%>'
        url = url.replace('<%COCKTAIL-ID%>',cocktailId )
        return $http.get(url)
    }
     return {
        getDetail: getDetail
      }

    })

.controller('DetailController', function($scope, DetailFactory) {
   
    DetailFactory.getDetail()
      .then( function(response) {
        $scope.cocktail = response.data.drinks
        console.log(response.data.drinks)
      })
  })