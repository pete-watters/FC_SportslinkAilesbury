'use strict';

/**
 * @ngdoc overview
 * @name fcSportslinkAilesburyApp
 * @description
 * # fcSportslinkAilesburyApp
 *
 * Main module of the application.
 */
angular
  .module('fcSportslinkAilesburyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
