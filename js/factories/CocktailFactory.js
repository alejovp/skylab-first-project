(function() {
    angular.module('myCocktailApp')

    .factory('CocktailFactory', function($http) {
        function getAlcoholicDrinks() {
            var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
            return $http.get(url)
        }

        function getNoAlcoholicDrinks() {
            var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
            return $http.get(url)
        }

        return {
            getAlcoholicDrinks: getAlcoholicDrinks,
            getNoAlcoholicDrinks: getNoAlcoholicDrinks
        }
    })
})()
