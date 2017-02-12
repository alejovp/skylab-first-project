(function () {
  angular.module('myCocktailApp')
    .controller('NavController', navController)

  function navController ($scope) {
    $scope.$on('eventSectionName', function (event, data) {
      $scope.sectionName = data
    })
  }
})()
