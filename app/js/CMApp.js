'use strict';

angular.module('CMApp', [
    'ngRoute',
    'ui.bootstrap',
    'CMApp.controllers'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/merchant', {
      templateUrl: 'partials/merchant_partial.html',
      controller: 'CMMerchantController'
    }).otherwise({ redirectTo: '/merchant' });
}])
