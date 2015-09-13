'use strict';
var myApp = angular.module('myApp');

myApp.controller('CitationsList', ['$scope', '$state', '$stateParams', 'civicCitationBackendService',
function($scope, $state, $stateParams, civicCitationBackendService) {
    console.log($stateParams.citation);
    $scope.citationInfo = civicCitationBackendService.getCitationByCreds();
}]);
