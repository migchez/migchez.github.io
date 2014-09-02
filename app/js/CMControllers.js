'use strict';

/* Controllers */

function merchant(name, address, city, state, has_ll) {
  return {
    'name'    : name,
    'address' : address,
    'city'    : city,
    'state'   : state,
    'has_ll'  : has_ll ? 'Yes' : 'No'
  };
}

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

  }]).controller('CMMerchantController', ['$scope', '$http', function($scope, $http) {

      /**
        searchText : String
        updated whenever the user changes the merchant search string    
       */
      $scope.searchText = "";
      $scope.searchTextChanged = function (searchText) {

      }

      function fetchMerchants(searchText) {
        $http.defaults.headers.common = {
          'username' : 'miguelsanchez',
          'pass'     : 'cabrerawho?'
        };

        // $http({method: 'GET', 'http://nschwab.wisely.io/v1/admin/merchant/search?query=Babo Market&is_like=0').success(
        //   function (data) {
        //     console.log(data);
        //   }
        // );

        $http.jsonp('http://nschwab.wisely.io/v1/admin/merchant/search?query=Babo Market&is_like=0');
      }

      fetchMerchants("Babo");
  }]);




















