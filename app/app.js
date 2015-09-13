'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router']).
config(function($stateProvider, $urlRouterProvider) {
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
});
