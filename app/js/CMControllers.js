'use strict';

/* Controllers */

angular.module('CMApp.controllers', [])
  .controller('CMNavController', ['$scope', function ($scope) {
    $scope.tabClasses = {
      'merchant' : 'active'
    };
  }]).controller('CMMerchantController', ['$scope', function($scope) {

  }]);
