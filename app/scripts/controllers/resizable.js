'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:ResizableCtrl
 * @description Sample Route Controller which shows an example resizable gallery
 * # ResizableCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('ResizableCtrl', function ($scope, gallery) {
    $scope.gallery = gallery;
  });
