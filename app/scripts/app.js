'use strict';

/**
 * @ngdoc overview
 * @name nimbusPlayerApp
 * @description
 * # nimbusPlayerApp
 *
 * Main module of the application.
 */
angular
  .module('nimbusPlayerApp', [
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
        templateUrl: 'views/player.html',
        //controller: 'PlayerCtrl',
        //controllerAs: 'player'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($http,genius) {
	  $http.defaults.headers.common.Authorization = 'Bearer ' + genius.token;
	});
