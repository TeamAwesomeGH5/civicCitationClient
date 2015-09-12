
angular.module('myApp', []).factory('CivicCitationBackendService',
['$timeout',
function('$timeout') {
  this.getCitationByCreds = function(creds) {
    return $timeout(function(){
      return {CourtAddress = "lol ave", courtDate: '9/20/2015'};
    },0)
  }
}]);
