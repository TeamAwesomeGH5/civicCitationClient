'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router']).
config(function($stateProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
  $stateProvider
    .state('searchForCitation', {
      url: "/",
      templateUrl: "pages/SearchForCitation/searchForCitation.html",
      controller: "SearchForCitation"
    })
    .state('citationsList', {
      url: "/listCitation",
      templateUrl: "app/directives/citationPanel/citationPanel.html",
      controller: "citationPanel"
    });
});
