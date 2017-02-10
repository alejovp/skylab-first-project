(function() {
    angular.module('myCocktailApp')

    .factory('IngredientFactory', function($http) {
        function getByIngredient(ingredient) {
            var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=<%INGREDIENT%>'
            url = url.replace('<%INGREDIENT%>', ingredient)
            return $http.get(url)
        }

        return {
            getByIngredient: getByIngredient
        }
    })
})()
