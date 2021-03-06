
var myApp = angular.module('myApp', [])
myApp.service('civicCitationBackendService',
function() {
  console.log("We are in the service.")
  this.getCitationByCreds = function(creds) {
    return function(){
      return {
              Citations:
              [
                {
                    id: 0,
                    citation_number: 0,
                    citation_date: "2015-09-12T14:19:30.622090932-05:00",
                    first_name: "",
                    last_name: "",
                    date_of_birth: "2015-09-12T14:19:30.62209097-05:00",
                    defendant_address: "",
                    defendant_city: "",
                    defendant_state: "",
                    drivers_license_number: "",
                    court_date: "2015-09-12T14:19:30.622091044-05:00",
                    court_location: "",
                    court_address: ""
                }
              ],
              Valid: true,
              Message: ""
          };
    };
  }
}]);
