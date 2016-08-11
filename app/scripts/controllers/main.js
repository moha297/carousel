'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('MainCtrl', function ($scope, gallery) {
    $scope.slides = gallery.data[0].slides;
    $scope.meta = {
      title : gallery.data[0].title,
      author : gallery.data[0].authfull
    }
  });
