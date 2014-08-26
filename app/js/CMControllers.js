'use strict';

/* Controllers */

angular.module('CMApp.controllers', [])
  .controller('CMNavController', ['$scope', function ($scope) {
    // TODO (migchez): Clean this up
    $scope.tabClasses = {
      'merchant' : 'active'
    };

    $scope.dbStage = 'Test';
    $scope.dbStageClasses = {
      'Test'    : 'active',
      'Staging' : '',
      'Prod'    : ''
    };

    $scope.dbStageUpdated = function (new_db_stage) {
      $scope.dbStageClasses[$scope.dbStage] = '';
      $scope.dbStage = new_db_stage;
      $scope.dbStageClasses[new_db_stage] = 'active';

      $scope.status.isopen = false;
    };

  }]).controller('CMMerchantController', ['$scope', function($scope) {

  }]);
