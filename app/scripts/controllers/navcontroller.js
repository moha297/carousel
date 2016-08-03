'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:NavcontrollerCtrl
 * @description
 * # NavcontrollerCtrl This controller helps in highlighting tabs in the header bar
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('NavcontrollerCtrl', function($scope) {
    var pathValue;
    // Why create directives and watches. Do some old school jquery for fun
    $scope.$on("$routeChangeSuccess", function(event, next, current) {
      pathValue = next.$$route.originalPath;
      $('.navbar-nav li').removeClass('active')
      $('.navbar-nav li a[href="#' + pathValue + '"]').parent().addClass('active');
    });
  });
