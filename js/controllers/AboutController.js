angular.module('myCocktailApp')

  .controller('AboutController', function ($scope) {

  $scope.showControl = function(){

   
    $scope.team = true;
    $scope.showTeam = function() {
      return ( $scope.team = $scope.team ? false : true )
    
    } 
  }

  })
