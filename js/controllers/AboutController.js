(function () {
  angular.module('myCocktailApp')

  .controller('AboutController', aboutController)

  function aboutController ($rootScope) {
    var vm = this
    vm.sectionName = 'about'
    $rootScope.$broadcast('eventSectionName', vm.sectionName)
  }
})()
