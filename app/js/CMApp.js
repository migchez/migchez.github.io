'use strict';

angular.module('CMApp', [
    'ngRoute',
    'CMApp.controllers'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dedup', {
      templateUrl: 'partials/dedup_partial.html',
      controller: 'CMDeduplicationController'
    }).otherwise({ redirectTo: '/dedup' });
}])
