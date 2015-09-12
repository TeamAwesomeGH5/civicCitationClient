'use strict';

angular.module('myApp', [])
.directive('citationPanel', function() {
  return {
    controller: function($scope) {
      $scope.name = 'Bob';
    },
    templateUrl: 'directives/citationPanel/citationPanel.html'
  };
});
