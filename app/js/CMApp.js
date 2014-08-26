'use strict';

angular.module('CMApp', [
    'ngRoute',
    'CMApp.controllers'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/merchant', {
      templateUrl: 'partials/merchant_partial.html',
      controller: 'CMMerchantController'
    }).otherwise({ redirectTo: '/merchant' });
}])
