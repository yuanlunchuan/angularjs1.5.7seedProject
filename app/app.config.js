'use strict';

angular
  .module('appName')
  .config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/error-page', {
        template: '<error-page></error-page>'
      }).
      otherwise('/error-page');;
    }
  ]);
