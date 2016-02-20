(function() {
  'use strict';

  angular.module('giblibApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('/home', {
          url: '/home',
          templateUrl: 'templates/home.html'
        })

      .state('/dad', {
        url: '/dad',
        templateUrl: 'templates/dad.html',
        controller: 'MainCtrl'

      })

      .state('/mom', {
        url: '/mom',
        templateUrl: 'templates/mom.html',
        controller: 'MainCtrl'


      });

      $urlRouterProvider.otherwise('/home');


    }]);


})();