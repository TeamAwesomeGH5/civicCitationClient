'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router']).
config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider, $httpProvider) {
  $urlRouterProvider.otherwise("/")
  $stateProvider
    .state('searchForCitation', {
      url: "/",
      templateUrl: "pages/SearchForCitation/searchForCitation.html",
      controller: "SearchForCitation"
    })
    .state('citationsList', {
      url: "/listCitation",
      templateUrl: "pages/CitationsList/citationsList.html",
      controller: "CitationsList",
      params:{
        citation: null
      }
    });
    
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from outer templates domain.
      'http://192.168.1.116:6969/**'
    ]);
});
