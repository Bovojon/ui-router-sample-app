(function() {
  'use strict';

  angular
    .module('routerApp', ['ui.router'])
    .config(configFunction)

  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configFunction($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {                                                            // HOME STATES AND NESTED VIEWS
          url: '/home',
          templateUrl: 'partial-home.html'
      })
      .state('home.list', {                                                       // nested list with custom controller
          url: '/list',
          templateUrl: 'partial-home-list.html',
          controller: function($scope) {                                          // Inline custom controller function
              $scope.mean = ['MongoDB', 'Express', 'Node.js', 'AngularJS'];
          }
      })
      .state('home.paragraph', {                                                  // nested list with just some random string data
          url: '/paragraph',
          template: '<p class="well">'+'In the AngularJS config function, the child states are built using the $stateProvider and defined as:'+'</br>'
                        +'<span class="text-primary">'+'$stateProvider.state( "parentState.childState", {stageConfigObject} )'+'</span>'+'</p>'
      });
  }


})();
