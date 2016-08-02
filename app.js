(function() {
  'use strict';

  angular
    .module('routerApp', ['ui.router'])
    .config(configFunction)
    .controller('ScotchController', ScotchController);    // Controllers must be named with captial letters

  /////////////////
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
      })
      // New view
      .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller
            'columnTwo@about': {
                templateUrl: 'table-data.html',
                controller: 'ScotchController'
            }
        }

    });
  }

  /////////////////
  ScotchController.$inject = ['$scope'];
  function ScotchController($scope) {
    $scope.message = 'test';
    $scope.means = [
        {
            name: 'M',
            abb: 'MongoDB'
        },
        {
            name: 'E',
            abb: 'Express'
        },
        {
            name: 'A',
            abb: 'AngularJS'
        },
        {
            name: 'N',
            abb: 'Node.js'
        }
    ];

  }


// End of IIFE
})();
