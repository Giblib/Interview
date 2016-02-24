angular.module('testApp')

.controller('testController', ['$scope', 'switchPages',
  function ($scope, switchPages) {

  vm = this;

  vm.showHome = true;
  vm.showAbout = false;

  vm.aboutUs = function () {
    switchPages.showAbout();
  }
  vm.home = function () {
    switchPages.showHome();
  }

}])