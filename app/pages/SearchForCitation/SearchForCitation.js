'use strict';
var myApp = angular.module('myApp');

myApp.controller('SearchForCitation', ['$scope', '$state',
function($scope, $state) {
  $scope.submitCitation = function() {

    $state.go('citationsList', {citation: $scope.citation});
  }
}]);
