'use strict';

/**
 * @ngdoc overview
 * @name carouselApp
 * @description
 * # carouselApp
 *
 * Main module of the application.
 */
angular
  .module('carouselApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          gallery: function(galleryService) {
            return galleryService.getGallery()
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
