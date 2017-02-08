angular.module('detailCocktail')

.factory('DetailFactory', function($http) {

            function getDetail(cocktailId) {
                var url = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=<%COCKTAIL-ID%>'
                url = url.replace('<%COCKTAIL-ID%>')
                return $http.get(url)
  } 
                        return {
                            getDetail: getDetail
                        }

                    })
