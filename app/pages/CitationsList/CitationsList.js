'use strict';
var myApp = angular.module('myApp');

myApp.controller('CitationsList', ['$scope', '$state', '$stateParams', '$timeout', 'civicCitationBackendService',
function($scope, $state, $stateParams, $timeout, civicCitationBackendService) {
    console.log($stateParams.citation);
    civicCitationBackendService.getCitationByCreds($stateParams.citation).then(function(data) {
        $scope.citationInfo = data;
      });
    $timeout(function(){ $state.go('searchForCitation')}, 60000)
}]);
