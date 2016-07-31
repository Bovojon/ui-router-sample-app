(function() {
  'use strict';

  app.module('routerApp', ['ui.router'])
    .config(configFunction);

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configFunction($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
      })

      .state('about', {

      });
  }

})();
