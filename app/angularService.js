angular.module('testApp')
  .factory('switchPages', [function () {

    function showAbout () {
      if(vm.showAbout === false) {
        vm.showHome = false;
        vm.showAbout = true;
      }
    }

    function showHome () {
      if(vm.showHome === false) {
        vm.showHome = true;
        vm.showAbout = false;
      }
    }

    return {
      showAbout: showAbout,
      showHome: showHome
    }

  }])