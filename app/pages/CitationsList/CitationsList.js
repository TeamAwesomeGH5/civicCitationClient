'use strict';
var myApp = angular.module('myApp');

myApp.controller('CitationsList', ['$scope', '$state',
function($scope, $state) {
  $scope.submitCitation = function() {
    $state.go('citationsList');
  }
}]);
