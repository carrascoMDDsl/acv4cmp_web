'use strict';

/*
 * app.js
 *
 * A Javascript exercise.
 *
 * Copyright 2014 by the Author of this code Antonio Carrasco Valero
 * 03/11/2014
 */

angular.module('cmpinterviewjs',
    [
        'ngRoute',
        '$strap.directives',
        'ui.bootstrap',
        'mongolabResourceHttp',
        'notificationWidget',
        'ngGrid',
        'ui.codemirror',
        'kineticNgServices',
        'mapcanvasServicesSupplier',
        'highlightrecommendationServicesSupplier',
        'waittimesServicesSupplier',
        'bracketsCheckerServiceSupplier',
        'shortestpathServiceSupplier',
        'parkPathsServiceSupplier',
        'tabsServiceSupplier',
        'parksModel'

    ]
);




angular.module('cmpinterviewjs').config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/welcome',              {templateUrl: 'partials/welcome.html',              controller: 'VoidCtrl'}).
      when('/credits',              {templateUrl: 'partials/credits.html',              controller: 'VoidCtrl'}).
      when('/objects',              {templateUrl: 'partials/objects.html',              controller: 'ObjectsCtrl'}).
      when('/map',                  {templateUrl: 'partials/map.html',                  controller: 'WaitTimesCtrl'}).
      when('/recommendation',       {templateUrl: 'partials/recommendation.html',       controller: 'RecommendationCtrl'}).
      when('/brackets',             {templateUrl: 'partials/brackets.html',             controller: 'BracketsCtrl'}).
      when('/diagrams',             {templateUrl: 'partials/diagrams.html',             controller: 'DiagramsCtrl'}).
      when('/programs',             {templateUrl: 'partials/programs.html',             controller: 'ProgramsCtrl'}).
      when('/choreography',         {templateUrl: 'partials/choreography.html',         controller: 'ChoreographyCtrl'}).
      when('/compatibility',        {templateUrl: 'partials/compatibility.html',        controller: 'VoidCtrl'}).
      when('/technologies',         {templateUrl: 'partials/technologies.html',         controller: 'VoidCtrl'}).

      otherwise({redirectTo: '/welcome'});
}]);


