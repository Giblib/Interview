'use strict';

angular
  .module('giblibApp', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'templates/main.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })
      .state('contact', {
        url: 'contact',
        templateUrl: 'templates/contact.html'
      });
     
    $urlRouterProvider.otherwise('/');

  }]);
