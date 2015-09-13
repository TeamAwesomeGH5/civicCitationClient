'use strict';
var myApp = angular.module('myApp');

myApp.service('civicCitationBackendService',
['$http', function($http) {
  this.getCitationByCreds = function(creds) {
    var req = {
     method: 'POST',
     url: 'http://localhost:6969/api/citations',
     headers: {
       'Content-Type': 'application/json'
     },
     data: {
       last_name: creds.lastName,
       license_number: creds.licenseNumber,
       dob: creds.dob
     }
    }

    return $http(req).then(function(response){
      console.log(response.data)
      return response.data;
    });
      // return {
      //         Citations:
      //         [
      //           {
      //               id: 0,
      //               citation_number: 0,
      //               citation_date: "2015-09-12T14:19:30.622090932-05:00",
      //               first_name: "",
      //               last_name: "",
      //               date_of_birth: "2015-09-12T14:19:30.62209097-05:00",
      //               defendant_address: "",
      //               defendant_city: "",
      //               defendant_state: "",
      //               drivers_license_number: "",
      //               court_date: "2015-09-12T14:19:30.622091044-05:00",
      //               court_location: "",
      //               court_address: ""
      //           }
      //         ],
      //         Valid<div class='info' ng-show="!citation.show">+</div>
      //         Message: ""
      //     };
  };
}]);


myApp.directive('citationPanel', ['civicCitationBackendService', function(civicCitationBackendService) {
  return {
    scope: {
      citation: "="
    },
    controller: function($scope) {

    },
    templateUrl: 'directives/citationPanel/citationPanel.html'
  };
}]);
